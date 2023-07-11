import React, { useEffect } from "react";
import PageTitle from "../../../component/PageTitle";
import { useNavigate } from "react-router-dom";
import { Table, message } from "antd";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { deleteExamById,deleteQuestionById, getAllExams } from "../../../apicalls/exams";

function Exams() {
    const navigate = useNavigate();
    const [exams, setExams] = React.useState([]);
    const dispatch = useDispatch();
 
    const getExamsData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await getAllExams();
            dispatch(HideLoading());
            if (response.success) {
                setExams(response.data);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };
    useEffect(() => {
        getExamsData();
    }, []);

    const deleteExam = async (examId) => {
        try {
          dispatch(ShowLoading());
          const response = await deleteExamById({
            examId ,
          });
          dispatch(HideLoading());
          if (response.success) {
            message.success(response.message);
            getExamsData();
          } else {
            message.error(response.message);
          }
        } catch (error) {
          dispatch(HideLoading());
          message.error(error.message);
        }
      };

      const columns = [
        {
            title: "Exam Name",
            dataIndex: "name",
        },
        {
            title: "Duration",
            dataIndex: "duration",
        },
        {
            title: "Category",
            dataIndex: "category",
        },
        {
            title: "Total Marks",
            dataIndex: "totalMarks",
        },
        {
            title: "Passing Marks",
            dataIndex: "passingMarks",
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => (
                <div className="flex gap-2">
                    <i className="ri-pencil-line"
                        onClick={() => navigate(`/admin/exams/edit/${record._id}`)}
                    ></i>
                    <i className="ri-delete-bin-line"
                        onClick={() =>deleteExam(record._id)}>
                    </i>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex justify-between mt-2">
                <PageTitle title="Exams" />
                <div className="mt-2"><br/>
                <button className="primary-outlined-btn flex items-center justify-end"
                    onClick={() => navigate("/admin/exams/add")}
                >
                    <i className="ri-add-line"></i>
                    Add Exam
                </button>
                </div>
            </div>
            <div className="divider"></div>
            <Table columns={columns} dataSource={exams} />
        </div>
    );
}
export default Exams;