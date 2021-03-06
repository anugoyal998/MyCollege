import React from 'react'
//components
import { Navbar } from './Navbar'
import { Content } from './Content'
import { Featured } from '../featured/Featured'
import { EngDepartments } from '../engDepartments/EngDepartments'
import { ContactUs } from '../contactus/ContactUs'

export const Home = () => {
    return (
        <div className="custom-bg">
            <div className="pt-3 h-screen custom-bg">
            <Navbar rightPat={true} />  
            <Content/>
            <div className="my-pattern absolute bottom-0 hidden lg:block" style={{width: '17vw', height: '50vh'}}></div>
            </div>
            <Featured/>
            <EngDepartments/>
            <ContactUs/>
        </div>
    )
}





