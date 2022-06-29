import React from "react";
import styled from "styled-components";

const Paginate = ({ handleNext, handlePrevious, page }) => {
  let IndexOfLastPost = 20;
  const FirstIndexResult = IndexOfLastPost * (page - 1) + 1;
  const LastIndexResult = IndexOfLastPost * page;

  return (
    <StyledFooter>
      <div>
        <StyledButtons onClick={handlePrevious}>Previous Page</StyledButtons>
        <StyledButtons style={{ color: "#318fe7" }} onClick={handleNext}>
          Next Page
        </StyledButtons>
      </div>
      <div>
        <StyledP>
          Showing results {FirstIndexResult}-{LastIndexResult}
        </StyledP>
      </div>
    </StyledFooter>
  );
};
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtons = styled.button`
  cursor: pointer;
  margin: 25px 30px;
  background: transparent;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: rgba(0, 0, 0, 0.48);

  &:hover,
  &:active {
    color: #318fe7;
  }
  /* &:after {
    width: 40px;
    height: 0px;
    border: 1px solid #6a6a6a;
    transform: rotate(90deg);
  } */
`;
const StyledP = styled.p`
  color: #989898;
  margin-bottom: 90px;
`;
export default Paginate;
