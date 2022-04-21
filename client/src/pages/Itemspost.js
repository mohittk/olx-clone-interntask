import React from 'react';
import {useState, useEffect} from 'react';
import {auth_user} from '../controllers/UserCon'
import Navbar from '../comp/Navbar'
import {create_post} from '../controllers/UserCon'

export default function Itemspost(){

    const [itemname, setItemname] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const [user_id, setUserId] = useState('');

    useEffect(()=>{
        if(localStorage.getItem('user_token')){
            let obj = {
                token: localStorage.getItem('user_token'),
            };
            auth_user(obj).then((data)=>{
                if(data.tag){
                    setIsLoggedIn(true);
                    setUserId(JSON.parse(atob(localStorage.getItem('user_token').split('.')[1])).id);
                    
                }
                else{
                    setIsLoggedIn(false);
                }
            })
            
        }

    });

    const handleChange = async(e) => {
        e.preventDefault();

        let obj = {
            item_name : itemname,
            item_price : price,
            item_status: status,
        };

        create_post(obj).then((data)=>{
          console.log(data);
          alert(data.message);
          window.location.reload();
        })

        

    }






    return(
        <>
        <Navbar />
        <div className="post-job-container text-left  dark:bg-[#2e2e2e] relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
            <div className="title ">
              <h1 className="m-10 text-3xl font-semibold text-indigo-600">
                {" "}
                Items posting Form{" "}
              </h1>
            </div>
            

            <div className="company mt-5">
              <label className="text-xl ml-10 font-medium">
                Enter name of Item
              </label>
              <br />
              <input
               
                type="text"
                value={itemname}
                onChange={((e)=>{
                    setItemname(e.target.value)
                })}
                
                className="company shadow-2xl p-3  ml-10 w-[85%] text-xl border-2 bg-white outline-none rounded-xl"
              />
            </div>

        

            <div className="location mt-5">
              <label className="text-xl ml-10 font-medium">
                {" "}
                Enter Price of item
              </label>
              <br />
              <input
                type="text"
                value={price}
                onChange={((e)=>{
                    setPrice(e.target.value)
                })}
                
                className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
              />
            </div>

            

            <div className="salary mt-5">
              <label className="text-xl ml-10 font-medium">
                {" "}
                Enter sold or unsold status
              </label>
              <br />
              <input
                type="text"
                value={status}
                onChange={((e)=>{
                    setStatus(e.target.value)
                })}
              
                className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
              />
            </div>

           

            
            <button
              className="submit mb-5 p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 bg-white outline-none rounded-xl "
              type="submit"
              onClick={handleChange}
             
            >
              Submit
            </button>
          </div>
        
        
        </>
    )
}