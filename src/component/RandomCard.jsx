import React, { useEffect, useState } from 'react'

const RandomCard = ({ ctnData }) => {
  const [country, setCountry] = useState({})

  useEffect(() => {
    if (ctnData.length) {
      function getRndNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const randNum = getRndNum(0, ctnData.length - 1)
      setCountry(ctnData[randNum])
    }
  }, [ctnData])

  return (
    <div className="lg:grid lg:grid-cols-12 group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <img
        src={country?.flag}
        alt={`${country?.name} flag`}
        className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-700"
      />
      <div className="p-6 space-y-2 lg:col-span-5 text-gray-800 dark:text-gray-100">
        <a
          href="#"
          className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"
        >
          {country?.name}
        </a>
        <span className="text-sm text-gray-500 dark:text-gray-400">{country?.region}</span>
        <p>Capital: {country?.capital}</p>
        <p>Area: {country?.area} km²</p>
        <p>Population: {country?.population}</p>
      </div>
    </div>
  )
}

export default RandomCard
