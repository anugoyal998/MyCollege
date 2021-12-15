import React, {useState} from 'react'
import { Input, LongButton } from "../../styles/global";
import toast, { Toaster } from "react-hot-toast";
import { Loading } from "../helper/loading/Loading";
import { branchesArr, semArr } from '../../constants/constants';
import {BackBtn} from '../helper/backBtn/BackBtn'
//upload function 
import { handleUploadNotes } from './functions/handleUploadNotes';
export const UploadNotes = () => {
    //states
    const [subject,setSubject] = useState()
    const [chapter,setChapter] = useState()
    const [branch,setBranch] = useState()
    const [sem,setSem] = useState()
    const [cc,setCC] = useState()
    const [file,setFile] = useState()
    const [loading,setLoading] = useState(false)
    //states
    //handle Upload notes
    const handleUploadClick = () => {
        handleUploadNotes({subject,setSubject,chapter,setChapter,branch,setBranch,cc,setCC,sem,setSem,file,setFile,loading,setLoading,toast})
    }
    //handke Upload notes
    return (
        <>
        {loading? <Loading /> : ""}
        <div className="w-screen h-screen flex items-center justify-center bg-white">
            <Toaster/>
            <div className="absolute left-0 top-0">
                <BackBtn/>
            </div>
            <div
                className="hidden md:block my-pattern-1 bottom-0 left-0 absolute"
                style={{ width: "17vw", height: "50vh" }}
            ></div>
            <div
            className="border-2 rounded-md flex flex-col justify-center items-center p-3"
            style={{ width: "350px" }}
            >
                <p className="text-2xl font-semibold text-center">
                Upload your Notes
                </p>
                <p className="text-lg text-gray-400">*Fill some details about notes</p>
                <Input
                    onChange={(e) => setSubject(e.target.value.toLowerCase())}
                    type="text"
                    placeholder="Subject"
                    className="my-2 w-full"
                />
                <Input
                    onChange={(e) => setChapter(e.target.value.toLowerCase())}
                    type="text"
                    placeholder="Chapter"
                    className="my-2 w-full"
                />
                <select className="w-full border-2 rounded-md p-3 outline-none" onChange={(e)=> setBranch(e.target.value)}>
                    <option selected disabled className="text-gray-400" value="Select Branch">Select Branch</option>
                    {
                        branchesArr.map((e,key) =>{
                            return <option key={key} value={e} >{e}</option>
                        })
                    }
                </select>
                <select className="w-full border-2 rounded-md p-3 outline-none mt-2" onChange={(e)=> setSem(e.target.value)}>
                    <option selected disabled className="text-gray-400" value="Select Semester">Select Semester</option>
                    {
                        semArr.map((e,key) =>{
                            return <option key={key} value={e}>{e}</option>
                        })
                    }
                </select>
                <Input
                    onChange={(e) => setCC(e.target.value.toLowerCase())}
                    type="text"
                    placeholder="Course Code"
                    className="my-2 w-full"
                />
                <Input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    className="my-2 w-full"
                    accept="application/pdf"
                    name="myFile"
                />
                <LongButton
                    className="bg-blue-700 text-white w-full"
                    onClick={handleUploadClick}
                >
                    Upload
                </LongButton>
            </div>
            <div
            className="hidden md:block my-pattern-1 top-0 right-0 absolute"
            style={{ width: "17vw", height: "50vh" }}
            ></div>
        </div>
        </>
    )
}
