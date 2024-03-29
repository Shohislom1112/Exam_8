"use client";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`bg-white h-[90px]  -top-1 left-0 right-0 z-20 fixed   shadow-lg`}
    >
      <div className={`container mx-auto   px-5`}>
        <div className="flex justify-between items-center">
          <IoIosSearch className="w-[24px] h-[24px] cursor-pointer hidden sm:block  text-[#22202E] hover:text-slate-950" />
          <p className="text-3xl font-normal text-[#101727] ">Avion</p>

          <div className="flex gap-4 jus items-center">
            <IoIosSearch
              href={"/shop"}
              className="block md:hidden  w-[28px] h-[28px] cursor-pointer  text-[#22202E] hover:text-slate-950"
            />
            <AiOutlineShoppingCart className="md:block hidden  w-[24px] h-[24px] cursor-pointer  text-[#22202E] hover:text-slate-950" />
            <FaRegUserCircle className="md:block hidden w-[24px] h-[24px] cursor-pointer  text-[#22202E] hover:text-slate-950" />

            <button
              onClick={handleClick}
              className="pt-2 flex-col gap-1 justify-center items-center block md:hidden w-[32px] h-[32px] cursor-pointer  text-[#22202E] hover:text-slate-950"
            >
              <span
                className={`bg-steel-500 block transition-all duration-300 ease-out
            h-1 w-8 rounded-md bg-black 
            ${
              open
                ? "rotate-45 translate-y-[0.41rem]"
                : "-translate-y-[0.30rem]"
            }`}
              ></span>
              <span
                className={`bg-steel-500 block
            h-1 w-8 rounded-md my-0.5 bg-black 
            ${open ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-steel-500 block transition-all duration-300 ease-out
            h-1 w-8 rounded-md bg-black  
             ${
               open
                 ? "-rotate-45 -translate-y-[0.35rem]"
                 : "translate-y-[0.30rem]"
             }`}
              ></span>
            </button>
          </div>
        </div>
        <hr className=" md:block hidden pr-6 h-2" />
        <div className=" justify-center gap-6 hidden md:flex">
          <Link
            href={"/about"}
            className="text-[#000]  hover:text-[#505977] cursor-pointer hover:font-normal"
          >
            About Us
          </Link>
          <Link
            href={"/shop"}
            className="text-[#000]  hover:text-[#505977] cursor-pointer hover:font-normal"
          >
            Shop
          </Link>
          <Link
            href={"/produckts"}
            className="text-[#000]  hover:text-[#505977] cursor-pointer hover:font-normal"
          >
            Produckts
          </Link>

          <Link
            href={"#"}
            className="text-[#000]  hover:text-[#505977] cursor-pointer hover:font-normal"
          >
            Plant pots
          </Link>
          <Link
            href={"#"}
            className="text-[#000]  hover:text-[#505977]  cursor-pointer hover:font-normal"
          >
            Ceramics
          </Link>
          <Link
            href={"#"}
            className="text-[#000]  hover:text-[#505977]  cursor-pointer hover:font-normal"
          >
            Tables
          </Link>
          <Link
            href={"#"}
            className="text-[#000]  hover:text-[#505977]  cursor-pointer hover:font-normal"
          >
            Chairs
          </Link>
          <Link
            href={"#"}
            className="text-[#000]  hover:text-[#505977]  cursor-pointer hover:font-normal"
          >
            Crockery
          </Link>
          <Link
            href={"#"}
            className="text-[#000]  hover:text-[#505977]  cursor-pointer hover:font-normal"
          >
            Tableware
          </Link>
          <Link
            href={"#"}
            className="text-[#000]  hover:text-[#505977]  cursor-pointer hover:font-normal"
          >
            Cutlery
          </Link>
        </div>
        <div
          className={`${
            open
              ? "translate-x"
              : "-translate-x-[420px] transation duration-400 ease-linier  "
          } absolute top-0 left-0 h-screen w-[50vw] bg-slate-200 z-50 transation duration-200 ease-linear md:hidden shadow-md`}
        >
          <div className="flex flex-col gap-4 pl-8 pt-4">
            <p className="text-3xl font-normal text-[#101727] ">Avion</p>
            <Link
              href={"#"}
              className="text-[#505977] hover:text-[#110f16] cursor-pointer pt-4 hover:font-normal"
            >
              About us
            </Link>
            <Link
              href={"#"}
              className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
            >
              Contact
            </Link>
            <Link
              href={"#"}
              className="text-[#505977] hover:text-[#110f16]  cursor-pointer hover:font-normal"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
