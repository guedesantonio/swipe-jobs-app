import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import JobCard from "./components/JobCard/JobCard";

function App() {
  return (
    <Wrapper>
      <Header/>
      <JobCard/>
    </Wrapper>
  );
}

export default App;
