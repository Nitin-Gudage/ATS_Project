import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import BasicDetails from './pages/BasicDetails';
// import JobPosting from './pages/JobPostings/JobPosting';
import Profile from './pages/ProfileCreationFresher/Profile';
import JobPosting from './pages/JobOpenings/JobPosting';
import MyOffers from './pages/MyOffers/MyOffers';
import ApplicationStatus from './pages/ApplicationStatus/ApplicationStatus';
import UpcomingInterview from './pages/MyInterviews/UpcomingInterview';

function App() {

  console.log("111");
  return (
   <div>
    <Home/>
    {/* <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/basic-details" element={<BasicDetails/>} /> */}
      {/* <Route path="/profile" element={<Profile/>} />
      <Route path="/openings" element={<JobPosting/>} />
      <Route path="/applications" element={<ApplicationStatus/>} />
      <Route path="/interviews" element={<UpcomingInterview/>} />
      <Route path="/offers" element={<MyOffers/>} /> */}

    {/* </Routes> */}
   </div>
  );
}

export default App;
