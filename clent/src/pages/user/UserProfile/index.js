import React from "react";
import PageTitle from "../../../component/PageTitle";
import { useSelector } from "react-redux";
import { Form } from "antd";

function UserProfile() {
    const { user } = useSelector((state) => state.users);
    return (
        <>
            <PageTitle title="Profile" />
            <div className="divider"></div>
            <div className="image">
            <Form className=" text-xl items-center justify-center">
                Name : {user?.name}<br/>
                Email : {user?.email}<br/>
                Role : {user?.isAdmin ? "Admin" : "User"}<br/>
            </Form>
            </div>


        </>
    )
}
export default UserProfile