import React from "react";
import styled from "styled-components";
import DateRangePicker from "./DateRangePicker";

const Search = ({ searchTerm, setSearchTerm }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <StyledSearch>
        <SearchBox>
          <StyledP>Search by release date:</StyledP>
          <DateRangePicker />
        </SearchBox>
        <StyledButton>Search</StyledButton>
      </StyledSearch>
    </form>
  );
};
const StyledSearch = styled.div`
  margin: 117px auto;
  padding: 27px 62px 25px 81px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  height: 85px;
  background: #e2e2e2;
  border-radius: 6px;
`;
const StyledP = styled.p`
  width: 165px;
  height: 19px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

// const StyledInput = styled.input`
//   margin-left: 29px;
//   box-sizing: border-box;
//   width: 221px;
//   height: 33px;
//   background: #ffffff;
//   border: 1px solid #cfcfcf;
//   outline: none;
//   text-indent: 10px;
// `;
const StyledButton = styled.button`
  cursor: pointer;
  width: 74px;
  height: 33px;
  background: #549df2;
  color: #fff;
  border-radius: 100px;
  border: none;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;
export default Search;
