import React from "react";
import {useState} from 'react';
import {login_user} from '../controllers/UserCon'
import Navbar from "../comp/Navbar";


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login_handlechange = async(e) =>{
    e.preventDefault();

    let obj = {
      user_email : email,
      user_password : password
    }
    login_user(obj).then((data)=>{
      if(data.tag == true){
        localStorage.setItem('user_token', data.token);
      }
      alert(data.message);
      window.location.reload();
    });
    


  }




  
  return (
    <>
      <div className="login">
        <Navbar />
        

        <div className="signup-formrelative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10 bg-[#ffffff]">
          <h1 className="ml-10 mb-5 text-[3rem] font-semibold text-black-600">
            {" "}
            Login
            <br />
            <span className="text-xl">Welcome Back !</span>
          </h1>

          <label className="text-xl ml-10 font-medium mt-5">
            {" "}
            Email address
          </label>
          <br />
          <input
            type="text"
            value={email}
            onChange={((e)=>{
              setEmail(e.target.value)
            })}
           
            className="role shadow-2xl p-3 w-[85%] text-xl ml-10 bg-white  outline-none border-2 rounded-xl"
          />

          <div className="location mt-5">
            <label className="text-xl ml-10 font-medium"> Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={((e)=>{
                setPassword(e.target.value);
              })}
            
              className="location p-3 border-2 shadow-2xl w-[85%] text-xl  ml-10  bg-white outline-none rounded-xl"
            />
          </div>
         

          <button
            className="submit p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 mb-5 bg-white outline-none rounded-xl "
            type="submit"
            onClick = {login_handlechange}
       
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
