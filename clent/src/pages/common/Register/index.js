import { Form, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      if (values.password !== values.cpassword) {
        dispatch(HideLoading());
        message.error("Passwords do not match");
        return;
      }
      const response = await registerUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      }
      else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="layout justify-between">
      <div className="body header flex items-center justify-center">
      <img className="img" src={process.env.PUBLIC_URL + "/OI.jpg"} alt="" />   
        <h2 className="text-2xl">Student E-Learning</h2>
      </div>
      <div className="back-image">
      <div className="flex justify-center items-center h-screen w-screen ">
        <div className="card bg-light w-400 p-3">
          <div className="flex flex-col">
            <div>
              <h1 className="text-2xl">REGISTER  <i class="ri-user-add-line"></i></h1>
            </div>
            <div className="divider"></div>
            <div className="flex">
              <Form layout="vertical" className="mt-2" onFinish={onFinish} >
                <Form.Item name="name" rules={[{ required: true, type: 'text', message: 'Please enter a username' }]}  label="Name"><input type="text" /></Form.Item>
                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}  label="Email"><input type="text" /></Form.Item>
                <Form.Item name="password" rules={[{ required: true, type: 'password'}]}  label="Password"><input type="password" /></Form.Item>
                <Form.Item name="cpassword"  label="Confirm Password"  rules={[{ required: true }]}><input type="password"/></Form.Item>
                <div className="flex flex-col gap-1">
                  <button type="submit" className="primary-contained-btn mt-2 w-100"> Register</button><br />
                  <Link to="/login">Already a member? Login</Link>
                </div>
              </Form> </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Register;