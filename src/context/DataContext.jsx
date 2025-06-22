import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getAllCountries } from '../service/service'


export const CountryData = createContext()


const DataContext = ({ children }) => {
  const [ctnData, setctnData] = useState([])
  const[error, setError] = useState(null)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
      getAllCountries()
      .then(item => setctnData(item))
      .catch(err=> setError(err.message || 'fetchde xeta var'))
      .finally(()=>setLoader(false))
  }, [])
  console.log(ctnData);



  return (
    <>
      <CountryData.Provider value={{ ctnData, error, loader}}>
        {children}
      </CountryData.Provider>
    </>
  )
}

export default DataContext