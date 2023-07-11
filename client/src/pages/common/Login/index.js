import { Form, message } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await loginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
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
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/OI.jpg"}
          alt=""
        />
        <h2 className="text-2xl">Student E-Learning</h2>
      </div>
      <div className="back-image">
        <div className="flex justify-center items-center h-screen w-screen ">
          <div className="card bg-light w-400 p-3">
            <div className="flex  flex-col ">
              <div>
                <h1 className="text-2xl">
                  LOGIN <i class="ri-login-circle-line"></i>
                </h1>
              </div>
              <div className="divider"></div>
              <div className="flex">
                <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email",
                      },
                    ]}
                    label="Email"
                  >
                    <input type="text" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your password",
                      },
                    ]}
                    label="Password"
                  >
                    <div className="password-input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="password-input"
                      />
                      {showPassword ? (
                        <EyeInvisibleOutlined
                          className="password-icon"
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <EyeOutlined
                          className="password-icon"
                          onClick={togglePasswordVisibility}
                        />
                      )}
                    </div>
                  </Form.Item>
                  <div className="flex flex-col gap-1">
                    <Link className="justify-end  ml items-end" to="/reset">
                      Forgot password?
                    </Link>
                    <button
                      type="submit"
                      className="primary-contained-btn mt-2 w-100"
                    >
                      Login
                    </button>
                    <br />
                    <Link to="/register">Not a member? Register</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;




/*
import { Form, message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";

function Login() {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await loginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
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
          <div className="flex  flex-col ">
            <div>
              <h1 className="text-2xl">LOGIN <i class="ri-login-circle-line"></i></h1>
            </div>
            <div className="divider"></div>
            <div className="flex">
              <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                <Form.Item name='email' rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]} label='Email'><input type="text" />
                </Form.Item>
                <Form.Item name='password' rules={[{ 
                  required: true, type: 'password', message: 'Please enter Password' }]} label='Password'><input type="password" />
                </Form.Item>
                <div className="flex flex-col gap-1">
                  <Link className="justify-end  ml items-end" to="/reset">Forgot password?</Link>
                  <button type="submit" className="primary-contained-btn mt-2 w-100 " >Login</button><br />
                  <Link to="/register">Not a member? Register</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    
  )
}

export default Login
*/