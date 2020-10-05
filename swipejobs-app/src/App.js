import React, { useState, useEffect } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header.js";
import JobCarousel from "./components/JobCarousel";
import { JobService } from './services/JobService';

function App() {
  const [workerProfile, setWorkerProfile] = useState([]);
  const [jobList, setJobList] = useState([]);

  useEffect(async () => {
    const workerProfile = await JobService.getWorkerProfile()
    if (workerProfile) {
      setWorkerProfile(workerProfile);
    }
    const jobs = await JobService.getJobList();
    if (jobs) {
        setJobList(jobs);
    }
  }, []);

  return (
    <Wrapper>
      <Header workerProfile={workerProfile} />
      <JobCarousel jobs={jobList} />
    </Wrapper>
  );
}

export default App;
