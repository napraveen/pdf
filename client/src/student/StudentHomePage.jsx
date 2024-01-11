import React from 'react';
import '../css/student.css';
const StudentHomePage = () => {
  return (
    <>
      <div className="student-dashboard-container">
        <div className="student-dashboard-title">
          <h1>My Data</h1>
        </div>
        <div className="student-dashboard-attendance">
          <div className="student-dashboard-present-days">
            <h1>Present Days:</h1>
            <h2>90</h2>
          </div>
          <div className="student-dashboard-absent-days">
            <h1>Absent Days:</h1>
            <h2>90</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHomePage;
