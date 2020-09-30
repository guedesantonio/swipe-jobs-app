import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import JobCarousel from "./components/JobCarousel/JobCarousel";

function App() {
  return (
    <Wrapper>
      <Header/>
      <JobCarousel/>
    </Wrapper>
  );
}

export default App;
