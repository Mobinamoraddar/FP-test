import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paginate from "./Paginate";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import { FaRegCalendar } from "react-icons/fa";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&page=${page}
`
    );
    const moviesData = await data.json();
    setMovies(moviesData);
  };

  const allMovies = movies?.results;

  //search
  // useEffect(() => {
  //   if (searchTerm) {
  //     const filteredMovies = allMovies?.filter();
  //     allMovies?.map((movie) => movie?.original_title).includes(searchTerm);
  //     setMovies(filteredMovies);
  //   } else {
  //     setMovies(movies);
  //   }
  // }, [searchTerm]);

  return (
    <>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Container>
        {allMovies &&
          allMovies.map((movie) => {
            return (
              <StyledLink to={"/detail/" + movie.id} key={movie.id}>
                <Card>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                    alt={movie?.original_title}
                  />
                  <div>
                    <p>{movie?.original_title}</p>
                    <span>
                      <span>
                        <FaRegCalendar />
                      </span>
                      {movie?.release_date}
                    </span>
                    {/* <span>
                      {movie?.genre_ids.map((item) => item)}
                      {allGenres
                        ?.map((genre) => genre.id)
                        .filter(
                          (genre) =>
                            genre.id === movie?.genre_ids.map((item) => item)
                        )}
                    </span> */}
                  </div>
                </Card>
              </StyledLink>
            );
          })}
      </Container>
      <Paginate
        page={page}
        handleNext={() => setPage((page) => page + 1)}
        handlePrevious={() => setPage((page) => (page > 1 ? page - 1 : page))}
      />
    </>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 71px;
  grid-template-columns: repeat(3, 295px);
  margin: 0px auto 145px auto;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
`;
const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 295px;
  height: 195px;
  background: #f1f1f1;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    margin-top: 16px;
    width: 121px;
    font-style: normal;
    font-weight: 700;
  }
  span {
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    color: #4e4e4e;
    margin-bottom: 57px;
    span {
      margin-right: 7px;
    }
  }
  img {
    margin-right: 11px;
    width: 128px;
    height: 194px;
    border-radius: 6px 0px 0px 6px;
  }
`;

export default Movies;
