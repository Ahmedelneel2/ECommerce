import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./../../../../public/screens/freshcart-logo.svg";
const Navbar = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row justify-between align-middle text-center p-2">
      <div className="flex  flex-col md:flex-row  justify-center align-middle">
        <Link className="w-full  " href="/">
          <Image className="object-cover p-1 " src={logo} alt="logo of market " />
        </Link>
        <div className="p-1 flex align-center flex-col md:flex-row justify-between">
          <Link className="ms-3 text-2xl text-gray-500  " href="/cart">
          Cart
        </Link>
        <Link className="ms-3 text-2xl text-gray-500   " href="/products">
          Products
        </Link>
        <Link className="ms-3 text-2xl text-gray-500   " href="/categories">
          Categories
        </Link>
        <Link className="ms-3 text-2xl text-gray-500   " href="/brands">
          Brands
        </Link>
      </div>
        </div>
      {/* icons and tabs of sign in */}
      <div className="flex flex-col md:flex-row justify-center p-1 align-middle">
        <Link className="flex align-middle justify-center m-2  " href="/brands">
          <i className="flex align-middle justify-center fa-brands fa-youtube text-2xl"></i>
        </Link>
        <Link className="flex align-middle justify-center m-2  " href="/brands">
          <i className="flex align-middle justify-center  fa-brands fa-tiktok text-2xl "></i>        </Link>
        <Link className="flex align-middle justify-center m-2  " href="/brands">
          <i className="flex align-middle justify-center  fa-brands fa-instagram text-2xl"></i>
        </Link>
        <Link className="flex align-middle justify-center m-2  " href="/brands">
          <i className="flex align-middle justify-center  fa-brands fa-twitter text-2xl"></i>    
        </Link>
           {/* tabs of sign in */}
    <div className="flex flex-col md:flex-row">
      <Link className="flex align-middle justify-center m-2 text-center  " href="/login">
        Sign In
        </Link> 
        <Link className="flex align-middle justify-center m-2 text-center  " href="/SignOut">
        Sign Out
        </Link> 
        <Link className="flex align-middle justify-center m-2 text-center  " href="/signup">
        Regestier
        </Link> 
    </div>
      </div>
   
    </div>
  );
};

export default Navbar;
