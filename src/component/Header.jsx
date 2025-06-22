import React, { useContext, useEffect, useState } from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { CountryData } from '../context/DataContext';

function Header({ setRegion }) {

const {ctnData} = useContext(CountryData)

  const regArr = [...new Set(ctnData.map(item => item.region))];
  const firstHalf = regArr.slice(0, 4);
  const secondHalf = regArr.slice(4, 8);

  const [burger, setBurger] = useState(false)
  const [isDark, setIsDark] = useState(false)

  function handleThema(){
    const newMode = !isDark
    setIsDark(newMode)
    localStorage.setItem("mode", newMode ? 'dark' : 'light')
    document.documentElement.classList.toggle("dark")
  }
  useEffect(()=>{
    const mode = localStorage.getItem("mode")
    if (mode == 'dark') {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }else{
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    }
  },[])

  

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
                <NavLink to={`/countries/${region}`} className="hover:underline font-semibold text-[20px] dark:text-white">
                  {region}
                </NavLink>
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
                <NavLink to={`/countries/${region}`} className="hover:underline dark:text-white">
                  {region}
                </NavLink>
              </li>
            ))}

            {/* Logo */}
            <li onClick={() => setRegion(null)}>
              <NavLink to={"/countries"} aria-label="Back to homepage" className="p-2 dark:text-white">
                <FaEarthAmericas size={30} />
              </NavLink>
            </li>

            {secondHalf.map((region, id) => (
              <li key={id} className='hidden md:flex' onClick={() => setRegion(region)}>
                <NavLink to={`/countries/${region}`} className="hover:underline dark:text-white">
                  {region}
                </NavLink>
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
