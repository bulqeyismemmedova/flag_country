import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'



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
    <Main region={region} ctnData ={ ctnData}/>
    <Footer/>
    </>
  )
}

export default App