import React from 'react'
const SkillCom = ({image , title}) => {
  return (
    <div className="inline-flex h-fit animate-shimmer items-center p-3 justify-center rounded-md border border-slate-400 bg-[linear-gradient(110deg,#1e429f,45%,#ffffff,55%,#1e429f)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <div className="text-white flex flex-col items-center">
              <img src={image} alt="React"  className="h-[80px] w-[80px] object-cover"/>
              <p>{title}</p>
            </div>
          </div>
  )
}

export default SkillCom
