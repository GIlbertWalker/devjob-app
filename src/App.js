
import './App.css'
import Header from './components/Header';
import JobList from './components/joblist';
import JobDetails from './components/JobDetails';

import {Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to = '/jobs'/>}/>
        <Route path="/jobs"  element={<JobList/>} />
        <Route path="/jobs/:position"  element={<JobDetails/>} />
        
      </Routes>
    </div>
  );
}

export default App;
