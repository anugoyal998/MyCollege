import React, {useState} from 'react'
import { ShortInput, ShortButton } from "../../styles/global";
import toast, { Toaster } from "react-hot-toast";
import { Loading } from "../../views/helper/loading/Loading";
import { branchesArr, semArr } from '../../constants/constants';
import {BackBtn} from '../../views/helper/backBtn/BackBtn'
//upload function
import {handleUploadNotes} from '../../views/uploadNotes/functions/handleUploadNotes'
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
    //handke Upload notes
    const handleUploadClick = () => {
        handleUploadNotes({subject,setSubject,chapter,setChapter,branch,setBranch,cc,setCC,sem,setSem,file,setFile,loading,setLoading,toast})
    }
    //handke Upload notes
    return (
        <>
            {loading? <Loading /> : ""}
            <Toaster/>
            <div className="w-screen h-screen flex items-center justify-center bg-white">
            <div className="absolute left-0 top-0">
                <BackBtn/>
            </div>
            <div className="border-2 rounded-md flex flex-col justify-center items-center p-2 mt-3"
            style={{width: '300px'}}
            >
                <p className="text-xl font-semibold text-center">
                Upload your Notes
                </p>
                <p className="text-gray-400">*Fill some details about notes</p>
                <ShortInput
                    onChange={(e) => setSubject(e.target.value.toLowerCase())}
                    type="text"
                    placeholder="Subject"
                    className="my-1 w-full"
                />
                <ShortInput
                    onChange={(e) => setChapter(e.target.value.toLowerCase())}
                    type="text"
                    placeholder="Chapter"
                    className="my-1 w-full"
                />
                <select className="w-full border-2 rounded-md p-2 my-1 outline-none" onChange={(e)=> setBranch(e.target.value)}>
                    <option selected disabled className="text-gray-400" value="Select Branch">Select Branch</option>
                    {
                        branchesArr.map((e,key) =>{
                            return <option value={e} >{e}</option>
                        })
                    }
                </select>
                <select className="w-full border-2 rounded-md p-2 my-1 outline-none mt-2" onChange={(e)=> setSem(e.target.value)}>
                    <option selected disabled className="text-gray-400" value="Select Semester">Select Semester</option>
                    {
                        semArr.map((e,key) =>{
                            return <option value={e}>{e}</option>
                        })
                    }
                </select>
                <ShortInput
                    onChange={(e) => setCC(e.target.value.toLowerCase())}
                    type="text"
                    placeholder="Course Code"
                    className="my-1 w-full"
                />
                <ShortInput
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    className="my-1 w-full"
                    accept="application/pdf"
                />
                <ShortButton
                    className="bg-blue-700 text-white w-full my-1"
                    onClick={handleUploadClick}
                >
                    Upload
                </ShortButton>
            </div>
            </div>
        </>
    )
}
