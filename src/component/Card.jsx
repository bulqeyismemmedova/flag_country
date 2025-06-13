import React from 'react'

function Card({ flag, region, name, capital, population, area }) {
  return (
    <article className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <a rel="noopener noreferrer" href="#" aria-label={`${name} flag`}>
        <img
          alt={`${name} flag`}
          className="object-cover w-full h-52 bg-gray-500"
          src={flag}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline text-violet-600"
        >
          {region}
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-gray-900 dark:text-white">
          {name}, {capital}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-300">
          <span>Population: {population}</span>
          <span>Area: {area} km²</span>
        </div>
      </div>
    </article>
  )
}

export default Card
