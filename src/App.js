import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import MovieDetail from "./components/MovieDetail";
import Movies from "./components/Movies";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body {
   width: 100vw;
   overflow-x: hidden;
   font-size: 16px;
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   
     }`;
export default App;
