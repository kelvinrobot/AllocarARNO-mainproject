import React from 'react'
import amazon from "../../assets/svgs/partners/amazon.svg"
import dribble from "../../assets/svgs/partners/dribble.svg"
import hubspot from "../../assets/svgs/partners/hubspot.svg"
import netflix from "../../assets/svgs/partners/netflix.svg"
import notion from "../../assets/svgs/partners/notion.svg"
import zoom from "../../assets/svgs/partners/zoom.svg"

const Partners = () => {
    return (
        <div className='my-[5rem]'>
            <div className="flex items-center justify-between mx-auto ">
                <span className='w-[100px]'>
                    <img src={amazon} alt="" />
                </span>
                <span className='w-[100px]'>
                    <img src={dribble} alt="" />
                </span>
                <span className='w-[100px]'>
                    <img src={hubspot} alt="" />
                </span>
                <span className='w-[100px]'>
                    <img src={netflix} alt="" />
                </span>
                <span className='w-[100px]'>
                    <img src={notion} alt="" />
                </span>
                <span className='w-[100px]'>
                    <img src={zoom} alt="" />
                </span>
            </div>
        </div>
    )
}

export default Partners