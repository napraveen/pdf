import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Attendance from './pages/Attendance';
import Edit from './pages/Edit';
import LeaveForm from './pages/LeaveForm';
import LeaveFormMentor from './mentor/LeaveFormMentor';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/leaveform" element={<LeaveForm />} />
        <Route path="/leaveform-mentor" element={<LeaveFormMentor />} />
      </Routes>
    </div>
  );
}

export default App;
