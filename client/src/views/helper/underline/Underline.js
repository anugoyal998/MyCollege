import React from 'react'

export const Underline = ({title,width}) => {
    return (
        <div className="flex flex-col items-center">
            <p className="custom-font text-3xl font-bold">{title}</p>
            <div className={`border-b-4 border-blue-700 ${width} rounded-md`}></div>
        </div>
    )
}
