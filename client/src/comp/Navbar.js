import React from "react";
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <>
      <Link className="m-3 p-2 rounded bg-yellow-400" to="/">Home</Link>
      <Link className="m-3 p-2 rounded bg-yellow-400" to="/login">Login</Link>
      <Link className="m-3 p-2 rounded bg-yellow-400" to="/signup">Signup</Link>
      <Link className="m-3 p-2 rounded bg-yellow-400" to="/itemspost">Post an Item</Link>
      <Link className="m-3 p-2 rounded bg-yellow-400" to="/items">Items</Link>

    </>
  );
}
