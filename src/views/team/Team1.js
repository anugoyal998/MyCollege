import React from "react";
import anubhavLg from '../../img/anubhav-lg.png'
import { FlexItemsCenter } from "../../styles/global";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

export const Team1 = () => {
    return (
        <div className="px-5 pt-5 custom-bg">
            <h1 className="text-3xl custom-font font-semibold text-center">About us</h1>
            <div className="flex items-center rounded-md bg-white">
                <img src={anubhavLg} alt="anubhav" className="rounded-md shadow-lg" />
            </div>
        </div>
    )
}
