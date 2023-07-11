import React from "react";
import PageTitle from "../../../component/PageTitle";
import { useSelector } from "react-redux";
import { Form } from "antd";

function AdminpProfile() {
    const { user } = useSelector((state) => state.users);
    return (
        <>
            <PageTitle title="Profile" />
            <div className="divider">
            <Form className=" text-xl items-center justify-center">
                Name : {user?.name}<br />
                Email : {user?.email}<br />
                Role : {user?.isAdmin ? "Admin" : "User"}<br />
            </Form>
            <div className="image"></div>
            
            </div>
        </>
    )
}
export default AdminpProfile