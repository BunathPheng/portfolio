import { MdOutlineCastForEducation } from "react-icons/md";

const EducationComponent = ({year, subject , university}) => {
  return (
    <>
      <div className="px-8 py-2 border border-white bg-transparent text-slate-50 relative group transition duration-200 overflow-visible">
                <div className="absolute -bottom-2 -right-2 p-5 bg-yellow-300 h-full w-full z-0 group-hover:bottom-0 group-hover:right-0 transition-all duration-200"></div>
                <span className="relative">
                <h1  className="text-xl font-semibold text-center">{year}</h1>
                  <div className="flex items-center space-x-9"> 
                    <MdOutlineCastForEducation className="text-6xl"/> 
                    <div className="flex flex-col text-start text-2xl space-y-1">
                        <h1 className="font-bold">{subject}</h1>
                        <p>{university}</p>
                    </div>
                  </div>
                </span>
        </div>
    </>
  )
}
export default EducationComponent;
