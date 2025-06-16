import React from 'react'
import { useParams } from 'react-router-dom'
import Error from './Error';

function Detail({ ctnData }) {

    const { ad } = useParams()
    const cntObj = ctnData.find(item => item.alpha3Code == ad)
    console.log(cntObj);


    if (!cntObj) {
        return <Error />
    }

    return (
        <>
            <div className="lg:grid lg:grid-cols-12 group bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300 container mx-auto my-10 p-7 shdow ">
                <img
                    src={cntObj?.flag}
                    alt={`${cntObj?.name} flag`}
                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-700 pr-10"
                />
                <div className="p-6 space-y-2 lg:col-span-5 text-gray-800 dark:text-gray-100">
                    <a
                        href="#"
                        className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"
                    >
                        {cntObj?.name}
                    </a>
                    <div className='flex flex-col gap-3 pt-3'>
                        <p className="text-md text-gray-500 dark:text-gray-400">Region:{cntObj?.region}</p>
                        <p>Capital: {cntObj?.capital}</p>
                        <p>Area: {cntObj?.area} km²</p>
                        <p>Population: {cntObj?.population}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail