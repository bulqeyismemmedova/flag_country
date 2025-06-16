import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error from './page/Error'
import Detail from './page/Detail'



function App() {
  const[region, setRegion] = useState(null)
  const[ctnData, setctnData] = useState([])
 
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json")
      .then(res=> res.json())
      .then(item=> setctnData(item))
  },[])
  console.log(ctnData);







  return (
    <>
    <Header setRegion={setRegion} ctnData = {ctnData}/>
    <Routes>
      <Route path='/' element={<Navigate to={'/countries'}></Navigate>}></Route>
      <Route path='/countries' element={<Main ctnData ={ ctnData}/>}></Route>
      <Route path='/countries/:region' element = {<Main ctnData={ctnData}></Main>}></Route>
      <Route path='*' element = {<Error></Error>}></Route>
      <Route path='/details/:ad' element = {<Detail ctnData={ctnData}></Detail>}></Route>
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App