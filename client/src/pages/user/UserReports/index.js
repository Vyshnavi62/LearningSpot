import React from "react";
import PageTitle from "../../../component/PageTitle";
import { message, Table } from "antd";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { useEffect } from "react";
import moment from "moment";
import { getAllReportsByUser } from "../../../apicalls/reports";

function UserReports() {
  const [reportsData, setReportsData] = React.useState([]);
  const dispatch = useDispatch();
 
  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examName",
      render: (text, record) => <>{record.exam.name}</>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</>
      ),
    },
    {
      title: "Total Marks",
      dataIndex: "totalQuestions",
      render: (text, record) => <>{record.exam.totalMarks}</>,
    },
    {
      title: "Passing Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.exam.passingMarks}</>,
    },
    {
      title: "Obtained Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.result.correctAnswers.length}</>,
    },
    {
      title: "Verdict",
      dataIndex: "verdict",
      render: (text, record) => <>{record.result.verdict}</>,
    },
    {
      title: 'References',
      key: 'key',
      dataIndex: 'key',
      render: (text, record) => (
        <button className="btn"
        onClick={() =>  handleViewResources(record)}>View Resources</button>
      ),
    }
  ];
  const handleViewResources = (record) => {
    //const { subject, score } = record;
     window.location.href = `/user/reports/resources?subject=${encodeURIComponent(record.exam.name)}&score=${record.result.correctAnswers.length}`;
  };
  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllReportsByUser();
      if (response.success) {
        setReportsData(response.data);
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
    getData();
  }, []);
 
  return (
    <div>
      <PageTitle title="Reports" />
      <div className="divider"></div>
       
      <Table columns={columns} dataSource={reportsData} />
    </div>
  );
}

export default UserReports;
































/*import React from "react";
import PageTitle from "../../../component/PageTitle";
import { message, Table } from "antd";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { useEffect } from "react";
import moment from "moment";
import { getAllReportsByUser } from "../../../apicalls/reports";

function UserReports() {
  const [reportsData, setReportsData] = React.useState([]);
  const dispatch = useDispatch();
   const [filters, setFilters] = React.useState({
    examName: "",
  });
  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examName",
      render: (text, record) => <>{record.exam.name}</>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</>
      ),
    },
    {
      title: "Total Marks",
      dataIndex: "totalQuestions",
      render: (text, record) => <>{record.exam.totalMarks}</>,
    },
    {
      title: "Passing Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.exam.passingMarks}</>,
    },
    {
      title: "Obtained Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.result.correctAnswers.length}</>,
    },
    {
      title: "Verdict",
      dataIndex: "verdict",
      render: (text, record) => <>{record.result.verdict}</>,
    },
    {
      title: 'References',
      key: 'key',
      dataIndex: 'key',
      render: (text, record) => (
        <button className="btn"
        onClick={() =>  handleViewResources(record)}>View Resources</button>
      ),
    }
  ];
  const handleViewResources = (record) => {
    //const { subject, score } = record;
     window.location.href = `/user/reports/resources?subject=${encodeURIComponent(record.exam.name)}&score=${record.result.correctAnswers.length}`;
  };
  const getData = async (tempFilters) => {
    try {
      dispatch(ShowLoading());
      const response = await getAllReportsByUser(tempFilters);
      if (response.success) {
        setReportsData(response.data);
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
    getData(filters);
  }, [filters]);
 
  return (
    <div>
      <PageTitle title="Reports" />
      <div className="divider"></div>
       <div className="flex gap-2">
        <input
          type="text"
          placeholder="Exam"
          value={filters.examName}
          onChange={(e) => setFilters({ ...filters, examName: e.target.value })}
        />
        <button
          className="primary-outlined-btn"
          onClick={() => {
            setFilters({
              examName: "",
            });
          }}
        >
          Clear 
        </button>
        <button className="primary-contained-btn" onClick={() => getData(filters)}>
          Search
        </button>
      </div>

      <Table columns={columns} dataSource={reportsData} />
    </div>
  );
}

export default UserReports;
*/
