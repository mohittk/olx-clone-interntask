import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ItemsPost from '../pages/Itemspost'
import ItemsDisp from '../pages/ItemsDisp'

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/itemspost" element={<ItemsPost />} />
          <Route exact path="/items" element={<ItemsDisp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
