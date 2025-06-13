import React, { useState } from 'react'
import Card from './Card'
import RandomCard from './RandomCard'

function Main({ region, ctnData }) {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState(false)

  function handleInput() {
    setStatus(!status)
  }

  return (
    <>
      {
        !region &&
        <section className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
          <div className="container mx-auto flex flex-col items-center px-4 py-10 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-full">
            <div className="title flex flex-col justify-center items-center gap-[40px] h-[40vh]">
              <h1 className="inline text-3xl font-bold tracking-tight text-black dark:text-white sm:block sm:text-5xl">
                Welcome to CountryApp Website
              </h1>
              <p className="inline text-2xl font-bold tracking-tight text-violet-500 sm:block lg:text-4xl">
                You can find data of any country in this website.
              </p>
            </div>
            <div>
              <input
                onChange={(e) => setValue(e.target.value)}
                placeholder='Olke axtar'
                className={`border p-3 rounded-2xl ${status ? 'block' : 'hidden'} dark:bg-gray-800 dark:border-gray-600 dark:text-white`}
                type="text"
              />
            </div>
            <div className="flex items-center justify-center gap-[30px] mt-10">
              <button className="py-[15px] rounded-[5px] border-0 font-bold text-white bg-violet-500 uppercase text-[.9rem] hover:bg-[#6f4cd6] md:w-[170px] px-3">
                HAVE A LOOK
              </button>
              <button onClick={handleInput} className="py-[15px] rounded-[5px] border-0 font-bold text-white bg-[#000] uppercase text-[.9rem] hover:bg-[#191919] md:w-[170px] px-3">
                SEARCH
              </button>
            </div>
          </div>
        </section>
      }

      {
        !region && !status && (
          <section className="py-6 sm:py-12 text-gray-800 dark:text-gray-100 dark:bg-gray-900">
            <div className="container p-6 mx-auto space-y-8">
              <RandomCard region={region} ctnData={ctnData} />
            </div>
          </section>
        )
      }

      <section className="py-6 sm:py-12 text-gray-800 dark:text-gray-100 dark:bg-gray-900">
        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {
              ctnData
                .filter(item => region ? item.region === region : item)
                .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
                .map(item => <Card key={item.name} {...item} />)
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
