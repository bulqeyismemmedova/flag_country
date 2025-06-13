import React, { useState } from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function Header({ setRegion, ctnData }) {
  const regArr = [...new Set(ctnData.map(item => item.region))];
  const firstHalf = regArr.slice(0, 4);
  const secondHalf = regArr.slice(4, 8);

  const [burger, setBurger] = useState(false)
  const [isDark, setIsDark] = useState(false)

  function handleThema() {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="p-4 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <div className={`h-screen w-[450px] ${burger ? 'flex' : 'hidden'} bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 fixed top-0 right-0`}>
        <div className='icon'>
          <IoMdClose className='top-3 right-3 absolute cursor-pointer' onClick={() => setBurger(!burger)} size={35} />
        </div>
        <div className='mt-[100px]'>
          <ul className='flex flex-col gap-5 mx-5'>
            {regArr.map((region, id) => (
              <li className='flex' onClick={() => setRegion(region)} key={id}>
                <a href="#" className="hover:underline font-semibold text-[20px] dark:text-white">
                  {region}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className='flex justify-between items-center'>
        <div className="container mx-auto flex md:justify-center items-center justify-between">
          <ul className="flex md:flex-row flex-wrap items-center gap-6">
            {firstHalf.map((region, id) => (
              <li className='hidden md:flex' onClick={() => setRegion(region)} key={id}>
                <a href="#" className="hover:underline dark:text-white">
                  {region}
                </a>
              </li>
            ))}

            {/* Logo */}
            <li onClick={() => setRegion(null)}>
              <a href="#" aria-label="Back to homepage" className="p-2 dark:text-white">
                <FaEarthAmericas size={30} />
              </a>
            </li>

            {secondHalf.map((region, id) => (
              <li key={id} className='hidden md:flex' onClick={() => setRegion(region)}>
                <a href="#" className="hover:underline dark:text-white">
                  {region}
                </a>
              </li>
            ))}
          </ul>

          
          <button onClick={() => setBurger(true)} title="Button" type="button" className="p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

       
        <div className='mx-5 cursor-pointer text-gray-800 dark:text-white'>
          {
            isDark
              ? <IoSunnyOutline onClick={handleThema} size={30} />
              : <IoMoonOutline onClick={handleThema} size={30} />
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
