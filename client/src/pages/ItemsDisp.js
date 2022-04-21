import React from 'react';
import Navbar from '../comp/Navbar'
import {useState} from 'react'
import { useEffect } from 'react';
import {Link } from 'react-router-dom'
import { auth_user } from '../controllers/UserCon';
import {get_all_items} from '../controllers/UserCon'
import ItemContainer from '../comp/ItemContainer'

 
export default function ItemsDisp() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() =>{ 
      if(localStorage.getItem("user_token")){
        let obj = {
          token: localStorage.getItem("user_token"),
        };
        auth_user(obj).then((data)=>{
          if(data.tag){
            // setIsLoggedIn(true);
            get_all_items().then((data)=>{
              console.log(data);
              setItems(data.message);
              
            });

          }
          else{
            // setIsLoggedIn(false);
          }
        })

      }
    }, []);
   




return (
    <>
      <div className=" ">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3rem] text-2xl  font-encode text-white">
            <Navbar active="jobs" />
          </div>
          <Link to="/">
            <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
              {" "}
             OLX clone
            </h1>
          </Link>
        </div>
      </div>
        <>
          

          <div className="show-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
            <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
              {items.length} Results Found
            </h2>

            
            {  items.map((item) => (
                <ItemContainer
                name={item.name}
                price={item.price}
                status={item.status}
                />
              ))
            }
            
          </div>
        </>
      ) 
        
      
    </>
  );
      }

