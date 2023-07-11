import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExams } from "../../../apicalls/exams";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import PageTitle from "../../../component/PageTitle";
import { useNavigate } from "react-router-dom";

function Home() {
  const [exams, setExams] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const branches = ['IT/CSE', 'ECE', 'EEE'];
  const subjects = {
    'IT/CSE': ['Java', 'C','MongoDB','Python'],
    ECE: ['Network Theory', 'Electronics Devices and Circuits'],
    EEE: ['Electrical Machines', 'Power Systems'],
  };
  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
    setSelectedSubject(null);
  };
  const handleSubjectSelect = (e) => {
    setSelectedSubject(e.target.value);
  };

  const getExams = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllExams();
      if (response.success) {
        setExams(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getExams();
  }, []);

  return (
    user && (
      <div>
        <PageTitle title={`Hi ${user.name}, Welcome for learning`} />
        
        <div className="image">
        <div className="divider" ></div>
        <select value={selectedBranch || ''} onChange={handleBranchChange}>
        <option value="">Select a Branch</option>
        {branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>

      {selectedBranch && (
        <div>
          <h2>Subjects for {selectedBranch}</h2>
          <select value={selectedSubject || ''} onChange={handleSubjectSelect}>
            <option value="">Select a Subject</option>
            {subjects[selectedBranch].map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      )}<br></br>
      {exams.map((exam) => {
               if (exam.name === selectedSubject) {
                return (
                 
                  <div className="card-lg flex flex-col gap-1 ">
                <div className="justify-center">
                <h2 className="text-xl">{exam?.name}</h2>

                <p className="text-md">Category : {exam.category}</p>
                <p className="text-md">Total Marks : {exam.totalMarks}</p>
                <p className="text-md">Passing Marks : {exam.passingMarks}</p>
                <p className="text-md">Duration : {exam.duration}</p>
               
                <button
                  className="secondary-outlined-btn justify-end"
                  onClick={() => navigate(`/user/write-exam/${exam._id}`)}
                >Start Exam</button>
                </div>
              </div>

                  
                );
              }
              return null;
            })}
          </div>      
      </div>
    )
  );
}

export default Home;