import React from 'react'

export const Featured = () => {
    return (
        <div id="featured" className="text-center custom-bg">
            <p className="lg:text-4xl text-2xl font-extrabold" style={{ fontFamily: "Merriweather" }} >MyCollege Featured</p>
            {/* <p className="text-gray-400 px-72 text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pousto id ea velit incsimilique corporis modi, dolores veritatis cupiditate repellat sed.</p> */}
            <div className="grid grid-cols-2 mt-2" >
                <MyCard title="All Branches Study Material" desc="" />
                <MyCard title="All Updates from NIT KKR" />
                <MyCard title="PYQs" />
                <MyCard title="Senior's Guidance" />
            </div>
        </div>
    )
}

const MyCard = (props)=> {
    const {title} = props;
    return(
        <div className="flex p-5">
            <div className="mx-2 pt-2">
            <i className="fas fa-book-open bg-blue-700 text-white p-2 rounded-md"></i>
            </div>
            <div className="text-left mx-2">
                <p className="lg:text-2xl text-lg font-semibold" >{title}</p>
                <p className="text-gray-400 xl:text-lg lg:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam q! Iusto, pariatur exercitationem.</p>
            </div>
        </div>
    )
}
