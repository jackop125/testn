import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between bg-neutral-500 text-white p-4">
          <a href="#">Navbar</a>
          <div className=" px-4">
            <ul className="flex ">
              <li className="px-2">
                <Link to="/">Home</Link>
              </li>
              <li className="px-2">
                <Link to="/about">Aboutus</Link>
              </li>
              <li className="px-2">
                <Link to="/contact">Contactus</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
