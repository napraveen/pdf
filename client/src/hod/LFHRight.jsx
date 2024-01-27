import React, { useState } from 'react';
//lfh => Leave Form Hod
import { useEffect } from 'react';
import GetUserDetails from '../functions/GetUserDetails';
import '../css/leaveformmentor.css';
import axios from 'axios';

const LFHRight = () => {
  const { userDetails } = GetUserDetails();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/hod/files/${userDetails.year}/${userDetails.department}/${userDetails.section}`
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
  const handleAccepted = async (file) => {
    const studentdata = {
      id: file._id,
      year: file.year,
      department: file.department,
      section: file.section,
      regNo: file.regNo,
      dates: file.dates,
    };
    const res = await axios.post(
      `http://localhost:4000/api/accepted`,
      studentdata
    );
    console.log(res);
  };

  const handleRejected = async (file) => {
    const studentdata = {
      id: file._id,
      department: file.department,
    };
    const res = await axios.post(
      `http://localhost:4000/api/rejected`,
      studentdata
    );
    console.log(res);
  };
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
              <th>Reason</th>
              <th>Dates</th>
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
                <td>{file.reason}</td>

                <td>
                  {file.dates &&
                    file.dates.map((date, index) => (
                      <div key={index}>{date}</div>
                    ))}
                </td>

                {/* {file.status !== 'accepted' ? ( */}
                <td>
                  {' '}
                  <button
                    type="submit"
                    className="lfm-accept-button"
                    onClick={() => handleAccepted(file)}
                  >
                    Accepted
                  </button>
                </td>
                {/* ) : (
                  <td>Accepted</td>
                )} */}

                {file.status !== 'rejected' ? (
                  <td>
                    {' '}
                    <button
                      type="submit"
                      className="lfm-reject-button"
                      onClick={() => handleRejected(file)}
                    >
                      Reject
                    </button>
                  </td>
                ) : (
                  <td>rejected</td>
                )}
              </tbody>
            ))}
          </table>
        </ul>
      </div>
    </div>
  );
};

export default LFHRight;
