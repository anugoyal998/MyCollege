import React from 'react'
//components
import { Content } from './Content'
import { Navbar } from './Navbar'

export const Home = () => {
    return (
        <div className="custom-bg">
            <div className="pt-3 h-screen custom-bg">
            <Navbar rightPat={true} />  
            <Content/>
            <div className="my-pattern absolute bottom-0 hidden lg:block" style={{width: '17vw', height: '50vh'}}></div>
        </div>
        </div>
    )
}
