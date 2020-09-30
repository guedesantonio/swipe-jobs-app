import React from 'react';
import './App.css';
import Wrapper from "./Components/Wrapper/Wrapper";
import Header from "./Components/Header/Header";
import PositionWrapper from "./Components/PositionWrapper/PositionWrapper";

function App() {
  return (
    <Wrapper>
      <Header/>
      <PositionWrapper/>
    </Wrapper>
  );
}

export default App;
