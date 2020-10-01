import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import JobCarousel from "./components/JobCarousel/JobCarousel";

const WORKER_ID = "7f90df6e-b832-44e2-b624-3143d428001f";

function App() {
  return (
    <Wrapper>
      <Header/>
      <JobCarousel workerId={WORKER_ID}/>
    </Wrapper>
  );
}

export default App;
