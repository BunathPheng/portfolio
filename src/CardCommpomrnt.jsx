import React from 'react'

const CardCommpomrnt = ({title ,  icon , p}) => {
  return (
    <>
    <div className="shadow-[0_4px_14px_0_rgb(255,255,255,25%)]  hover:bg-[rgba(30,66,159,0.9)] px-8 py-6 h-52  bg-[#1e429f] rounded-md text-white font-light transition duration-200 ease-linear w-64">
    {icon}
     <h1 className="text-md mt-2 font-bold text-yellow-300">{title}</h1>
     <p>{p}</p>
   </div> 
   </>
  )
}
export default CardCommpomrnt
