import React, { useState, useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

const MovieDetail = () => {
  const [detail, setDetail] = useState();
  const [credit, setCredit] = useState();
  let { id } = useParams();

  const getDetail = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f62f750b70a8ef11dad44670cfb6aa57`
    );
    const movieDetail = await data.json();
    setDetail(movieDetail);
  };
  useEffect(() => {
    getDetail(id);
  }, [id]);

  //   credits
  const getCredit = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f62f750b70a8ef11dad44670cfb6aa57`
    );
    const credits = await data.json();
    setCredit(credits.cast);
  };
  console.log(credit);
  const TenFirstCredits = credit?.slice(0, 10).map((item) => item.name);

  console.log(TenFirstCredits);
  useEffect(() => {
    getCredit(id);
  }, [id]);
  console.log(detail);
  return (
    <DetailPage>
      <StyledHeader>
        <StyledLink to={"/"}>
          <StyledBackButton>
            <IoMdArrowBack />
            <span>Back</span>
          </StyledBackButton>
        </StyledLink>
        <StyledTitle>
          <h1>{detail?.original_title}</h1>
          <span>{detail?.tagline}</span>
        </StyledTitle>
      </StyledHeader>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w200${detail?.poster_path}`}
          alt={detail?.original_title}
        />
        <StyledDetail>
          <div>
            <p>Budget</p>
            <span>${detail?.budget.toLocaleString()}</span>
          </div>
          <div>
            <p>Revenue</p>
            <span>${detail?.revenue.toLocaleString()}</span>
          </div>
          <div>
            <p>Release Date</p>
            <span>{detail?.release_date}</span>
          </div>
          <div>
            <p>Runtime</p>
            <span>{detail?.runtime}m</span>
          </div>
          <div>
            <p>Score</p>
            <span>
              {detail?.vote_average}({detail?.vote_count} votes)
            </span>
          </div>
          <div>
            <p>Genres</p>
            <span>
              {detail?.genres.map((item, index) => {
                return (
                  <span key={item.id}>
                    {item.name} {index < detail?.genres.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </span>
          </div>
          <div>
            <p>IMDb Link</p>
            <a href={detail?.homepage}>Link</a>
          </div>
          <div>
            <p>Homepage Link</p>
            <a href={detail?.homepage}>Link</a>
          </div>
        </StyledDetail>
      </Container>

      <StyledOverview>
        <p>{detail?.overview}</p>
      </StyledOverview>
      <StyledCredit>
        <h3>Credit:</h3>
        <p>
          {TenFirstCredits?.map((item, index) => {
            return (
              <span key={index}>
                {item} {index < TenFirstCredits?.length - 1 ? ", " : ""}
              </span>
            );
          })}
          and {credit?.length - 10} more.
        </p>
      </StyledCredit>
    </DetailPage>
  );
};

const DetailPage = styled.div`
  width: 1024px;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 330px;
    height: 495px;
    border-radius: 12px;
    margin-right: 70px;
    margin-bottom: 53px;
  }
`;

const StyledDetail = styled.div`
  width: 610px;
  div {
    margin: 18px 0px;
    display: flex;
    justify-content: space-between;
    line-height: 22px;
    color: #151515;
    p {
      font-weight: 700;
      font-size: 16px;
    }
    span {
      font-weight: 400;
      font-size: 16px;
      text-align: right;
    }
    a {
      text-decoration-line: underline;
      font-weight: 400;
      font-size: 14px;
      color: #318fe7;
    }
  }
`;

const StyledOverview = styled.div`
  margin: 0 auto 80px auto;
  p {
    font-size: 16px;
    line-height: 22px;
    color: #1e1e1e;
  }
`;
const StyledHeader = styled.div`
  margin: 117px auto 78px auto;
  padding: 19px 35px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 85px;
  background: #e2e2e2;
  border-radius: 6px;
`;
const StyledBackButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 33px;
  background: #549df2;
  color: #fff;
  border-radius: 100px;
  border: none;
  span {
    margin-left: 7px;
  }
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
const StyledTitle = styled.div`
  margin-left: 64px;
  color: #000000;
  h1 {
    font-size: 18px;
    margin-bottom: 6px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
  }
`;
const StyledCredit = styled.div`
  margin-bottom: 471px;
  line-height: 22px;
  h3 {
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    margin-bottom: 12px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: #1e1e1e;
  }
`;
export default MovieDetail;
