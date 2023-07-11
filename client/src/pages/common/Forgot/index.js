import { Form, message } from "antd";
import React, { Component } from "react";
import { registerUser } from "../../../apicalls/users";
//import { useDispatch } from "react-redux";
//import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
//import { render } from "react-dom";

export default class Reset extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

 handleSubmit(e) {
  console.log(e);
      e.preventDefault();
      const {email}=this.state;
      console.log(email);
      fetch("http://localhost:5000/api/users/forgot", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ email}),
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data,"registerUser")
        alert(data.status);
      });
    } 

  render(){
    return (
      <div className="layout justify-between">
        <div className="body header flex items-center justify-center">
          <img className="img" src={process.env.PUBLIC_URL + "/OI.jpg"} alt="" />
          <h2 className="text-2xl">Student E-Learning</h2>
        </div>
        <div className="back-image">
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="card bg-light w-400 p-3">
            <div className="flex flex-col">
              <div>
                <h1 className="text-2xl">
                  Forgot Password
                </h1>
              </div>
              <div className="divider"></div>
              <div className="flex">
                <Form layout="vertical" className="mt-2" >
                  <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                    <input type="email" onChange={(e) => this.setState({ email: e.target.value })} />
                  </Form.Item>
                  <button type="submit" className="primary-contained-btn mt-2 w-100" onClick={this.handleSubmit}>
                    Send
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
