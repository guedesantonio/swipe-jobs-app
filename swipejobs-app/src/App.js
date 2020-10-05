import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header.js";
import JobCarousel from "./components/JobCarousel/JobCarousel";

const WORKER_ID = "7f90df6e-b832-44e2-b624-3143d428001f";

function App() {
  const PROFILE_URL = `https://test.swipejobs.com/api/worker/${WORKER_ID}/profile`;
  const [workerProfile, setWorkerProfile] = useState([]);

  useEffect(() => {
    axios.get(PROFILE_URL).then(res => {
      setWorkerProfile(res.data);
    })
  }, []);

  return (
    <Wrapper>
      <Header workerProfile={workerProfile} />
      <JobCarousel workerId={WORKER_ID} />
    </Wrapper>
  );
}

export default App;
