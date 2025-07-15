import React from 'react'
import Final  from "./image/Final.png";
const CardProject = () => {
  return (
    <div class="cursor-pointer group relative flex flex-col bg-gray-100  shadow-sm border border-slate-200 rounded-lg w-64 hover:shadow-lg transition-shadow duration-300">
  <div class="relative h-36  w-48 object-cover  m-2.5 overflow-hidden text-white rounded-md">
    <img class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
         src={Final} alt="investment-seed-round" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-yellow-300 text-xl font-semibold">
      English Cub
    </h6>
    <p class="text-black leading-normal font-light">
    Learn English online and improve your skills through our high-quality courses and resources.
    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-blue-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Link more
    </button>
  </div>
</div> 
  )
}

export default CardProject
