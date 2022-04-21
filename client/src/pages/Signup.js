import React from "react";
import { useNavigate } from "react-router";
import {useState } from 'react';
import Navbar from '../comp/Navbar'


import { signup_user } from "../controllers/UserCon";


export default function Signup(){

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');

  const signup_handle = async(e) => {
    e.preventDefault();

    const obj = {
      user_name : name,
      user_email : email,
      user_password : password,
      user_mobilenumber : mobilenumber
    }
    signup_user(obj).then((data)=> alert(data.message));

    setName('');
    setEmail('');
    setPassword('');
    setMobilenumber('');

  }

    return (
        <>
        <Navbar />

<div className="signup-form relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10 bg-[#ffffff]">
          <h1 className="ml-10 mb-5 text-[3rem] font-semibold text-black">
            {" "}
            Signup
            <br />
            <span className="text-xl">Tell us about yourself !</span>
          </h1>

          

          <label className="text-xl ml-10 font-medium "> Full Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={((e)=>{
              setName(e.target.value)
            })}
            
            className="role shadow-2xl p-3 w-[85%] text-xl ml-10 bg-white  outline-none border-2 rounded-xl"
          />

          <div className="company mt-5">
            <label className="text-xl ml-10 font-medium">Email Address</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={((e)=>{
                setEmail(e.target.value)
              
              })}
              className="company shadow-2xl p-3 w-[85%] text-xl ml-10 border-2 bg-white outline-none rounded-xl"
            />
          </div>

          <div className="location mt-5">
            <label className="text-xl ml-10 font-medium"> Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={((e)=>{
                setPassword(e.target.value)
              })}
              className="location p-3 border-2 shadow-2xl w-[85%] text-xl ml-10 mb-10 bg-white outline-none rounded-xl"
            />
          </div>

          <div className="location ">
            <label className="text-xl ml-10 font-medium"> Mobile Number</label>
            <br />
            <input
              type="number"
              value={mobilenumber}
              onChange={((e)=>{
                setMobilenumber(e.target.value)
              })}

             
              className="location p-3 border-2 shadow-2xl w-[85%] text-xl ml-10 mb-10 bg-white outline-none rounded-xl"
            />
          </div>
        

             
          

          <button
            className="submit p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 mb-5 bg-white outline-none rounded-xl "
            type="submit"
            onClick={signup_handle}
            
          >
            Submit
          </button>

          <div className="already flex flex-row">
            <h3 className="ml-5 p-2 text-2xl text-indigo-600 font-medium">
              Already have an account?
            </h3>
            <button
              className="submit p-2 border-2 shadow-2xl w-[30%] text-xl hover:bg-[#c0c0c0] bg-white outline-none rounded-xl "
              type="submit"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
        </>
    )
}