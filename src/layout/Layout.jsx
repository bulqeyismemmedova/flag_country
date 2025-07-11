import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header/>
                <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Layout