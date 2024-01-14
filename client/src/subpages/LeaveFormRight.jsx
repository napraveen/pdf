import React, { useState } from 'react';
import '../css/leaveform.css';
import { useEffect } from 'react';
import GetUserDetails from '../functions/GetUserDetails';
import Left from '../subpages/Left';
import { Link } from 'react-router-dom';
import axios from 'axios';
const LeaveFormRight = () => {
  const { userDetails } = GetUserDetails();
  const [isAddStudentClassClicked, setisAddStudentClassClicked] =
    useState(true);
  const addStudentClass = () => {
    setisAddStudentClassClicked(!isAddStudentClassClicked);
  };
  const studentFormClass = {
    display: isAddStudentClassClicked ? 'none' : 'block',
  };

  const [studentData, setStudentData] = useState({
    year: '',
    department: '',
    section: '',
    email: '',
  });
  useEffect(() => {
    // Update studentData when userDetails change
    setStudentData({
      year: userDetails?.year ?? '',
      department: userDetails?.department ?? '',
      section: userDetails?.section ?? '',
      email: '',
    });
  }, [userDetails]);
  const handleSubmitAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:4000/api/${userDetails.year}/${userDetails.department}/${userDetails.section}/submitleaveform`,
        studentData
      );
      // const { success, message } = data;
      setStudentData({
        year: '',
        department: '',
        section: '',
        email: '',
      });
    } catch (err) {
      console.error('Error adding student:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };
  return (
    <>
      <div className="home-home_page">
        {userDetails ? (
          <>
            <div className="home-container">
              <div className="home-dashboard">
                <Left
                  iconBg1=""
                  iconText1=""
                  iconBg2="#3D3B40"
                  iconText2="white"
                  iconBg3=""
                  iconText3=""
                  iconBg4=""
                  iconText4=""
                  iconBg5=""
                  iconText5=""
                  menu1="Dashboard"
                  menu2={
                    userDetails.category === 'student'
                      ? 'Leave Form'
                      : 'DashBoard'
                  }
                  menu3="Edit"
                  menu4="Calendar"
                  menu5="Settings"
                  link1="/"
                  link2={
                    userDetails.category === 'student'
                      ? '/leaveform'
                      : '/attendance'
                  }
                />
                <div className="edit-right">
                  <div className="edit-add-a-student" onClick={addStudentClass}>
                    <p>Add a student</p>
                  </div>

                  <div style={studentFormClass} className="edit-add-student">
                    <form onSubmit={handleSubmitAddStudent}>
                      <input
                        type="text"
                        name="year"
                        value={studentData.year}
                        onChange={handleChange}
                        placeholder="Year of Study"
                      />
                      <input
                        type="text"
                        name="department"
                        value={studentData.department}
                        onChange={handleChange}
                        placeholder="Department"
                      />
                      <input
                        type="text"
                        name="section"
                        value={studentData.section}
                        onChange={handleChange}
                        placeholder="Section"
                      />
                      <input
                        type="email"
                        name="email"
                        value={studentData.email}
                        className="signup-email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                      />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </>
  );
};

export default LeaveFormRight;
