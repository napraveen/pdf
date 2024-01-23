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
        // console.log('files' + JSON.stringify(response));

        setFiles(response.data.files);
        console.log('res' + JSON.stringify(response.data.files));
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    if (userDetails) {
      fetchFiles();
    }
  }, [userDetails]);
  return (
    <div className="lfm-container">
      {' '}
      <div className="lfm-file-list">
        <h2>Uploaded Files:</h2>
        <ul>
          <table>
            <tr>
              <th>Name</th>
              <th>Register No</th>
              <th>Link</th>
              <th>Verify</th>
              <th>Reject</th>
            </tr>
            {files.map((file) => (
              <tbody key={file._id}>
                <td> {file.name}</td>
                <td> {file.regNo}</td>
                <td>
                  {' '}
                  <a
                    href={file.imgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file.imgUrl ? 'Click Here' : ''}
                  </a>
                </td>
                <td>
                  {' '}
                  <button type="submit" className="lfm-accept-button">
                    Verified
                  </button>
                </td>
                <td>
                  {' '}
                  <button type="submit" className="lfm-reject-button">
                    Reject
                  </button>
                </td>
              </tbody>
            ))}
          </table>
        </ul>
      </div>
    </div>
  );
};

export default LFMRight;
