import React, { useState } from 'react';
//lfm => Leave Form Mentor
import { useEffect } from 'react';
import GetUserDetails from '../functions/GetUserDetails';
import '../css/leaveformmentor.css';
import axios from 'axios';

const LFMRight = () => {
  const { userDetails } = GetUserDetails();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/files/${userDetails.year}/${userDetails.department}/${userDetails.section}`
        );

        setFiles(response.data.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    if (userDetails) {
      fetchFiles();
    }
  }, [userDetails]);

  const renderFiles = () => {
    return files.map((file) => (
      <div key={file._id}>
        <h3>Email: {file.email}</h3>
        <p>Filename: {file.filename}</p>
        <p>
          <a
            href={`http://localhost:4000/api/files/${file._id}`} // Assuming you have an endpoint to get the file data
            target="_blank"
            rel="noopener noreferrer"
          >
            View File
          </a>
        </p>
        {/* <img
          src={`http://localhost:4000/api/files/${file._id}`} // Assuming the file is an image
          alt={file.filename}
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        /> */}
      </div>
    ));
  };

  return (
    <div className="lfm-container">
      {' '}
      <div className="lfm-file-list">
        {' '}
        <h2>Uploaded Files:</h2>
        {renderFiles()}
      </div>
    </div>
  );
};

export default LFMRight;

// import React, { useState, useEffect } from 'react';
// import GetUserDetails from '../functions/GetUserDetails';
// import axios from 'axios';

// const LFMRight = () => {
//   const { userDetails } = GetUserDetails();
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/api/files/${userDetails.year}/${userDetails.department}/${userDetails.section}`
//         );

//         setFiles(response.data.files);
//       } catch (error) {
//         console.error('Error fetching files:', error);
//       }
//     };

//     if (userDetails) {
//       fetchFiles();
//     }
//   }, [userDetails]);

//   const renderFiles = () => {
//     return files.map((file) => (
//       <div key={file._id}>
//         <h3>Email: {file.email}</h3>
//         <p>Filename: {file.filename}</p>
//         <p>
//           <a
//             href={`http://localhost:4000/api/files/${file._id}`} // Assuming you have an endpoint to get the file data
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View File
//           </a>
//         </p>
//         <img
//           src={`http://localhost:4000/api/files/${file._id}`} // Assuming the file is an image
//           alt={file.filename}
//           style={{ maxWidth: '100%', maxHeight: '200px' }}
//         />
//       </div>
//     ));
//   };

//   return (
//     <div className="lfm-container">
//       {' '}
//       <div className="lfm-file-list">
//         {' '}
//         <h2>Uploaded Files:</h2>
//         {renderFiles()}
//       </div>
//     </div>
//   );
// };

// export default LFMRight;
