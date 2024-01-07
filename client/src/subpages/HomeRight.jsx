import React from 'react';
import GetUserDetails from '../functions/GetUserDetails';
import { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import MentorHomePage from '../mentor/MentorHomePage';
import HodHomePage from '../hod/HodHomePage';
const HomeRight = ({
  data,
  department,
  handleSubmit,
  handleCheckboxChange,
  studentAttendance,
  userDetails,
}) => {
  return (
    <>
      {userDetails.category === 'mentor' ? (
        <MentorHomePage data={data} userDetails={userDetails} />
      ) : userDetails.category === 'hod' ? (
        <HodHomePage data={data} userDetails={userDetails} />
      ) : (
        // <MentorHomePage data={data} userDetails={userDetails} />
        <h1>dsf</h1>
      )}
    </>
  );
};

export default HomeRight;
