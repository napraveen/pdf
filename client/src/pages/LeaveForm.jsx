import React from 'react';
import Left from '../subpages/Left';
import GetUserDetails from '../functions/GetUserDetails';

const LeaveForm = () => {
  const { userDetails } = GetUserDetails();
  return (
    <div>
      {userDetails ? (
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
            userDetails.category === 'student' ? 'Leave Form' : 'DashBoard'
          }
          menu3="Edit"
          menu4="Calendar"
          menu5="Settings"
          link1="/"
          link2={
            userDetails.category === 'student' ? '/leaveform' : '/attendance'
          }
        />
      ) : (
        <h1>hi</h1>
      )}
    </div>
  );
};

export default LeaveForm;
