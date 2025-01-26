export default function ProjectDetailsSkeleton() {
  return (
    <div className="w-full mb-12 md:mb-20">
      <div className="w-[full] h-[20dvh] md:h-[30dvh]  mb-4 relative">
        <div className=" bg-gray-700 absolute top-0 left-0 w-full h-full object-cover blur-sm brightness-[0.35] z-[-10] mask-image-linear-gradient"></div>
        <div className="w-[80%] h-full md:w-[60%] lg:w-[40%] mx-auto py-3 md:py-6 flex flex-col justify-end items-start">
          <h1 className="w-[60%] h-12  text-2xl md:text-5xl drop-shadow-[5px_5px_7px_rgb(0,0,0)] animate-pulse bg-slate-800 rounded-md"></h1>
        </div>
      </div>
      <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto place-items-center">
        <div className="w-full flex flex-row justify-between items-center mb-5">
          <p className="animate-pulse bg-slate-800 w-28 h-6 rounded-md"></p>
          <div className="flex flex-row gap-2">
            <p className="animate-pulse bg-slate-800 w-16 md:w-28 h-6 rounded-md"></p>
            <p className="animate-pulse bg-slate-800 w-16 md:w-28 h-6 rounded-md"></p>
          </div>
        </div>
        <div className="w-full mb-4">
          <h2 className="mb-2 w-40 h-10 animate-pulse bg-slate-800 rounded-md"></h2>
          <p className="w-full h-8 animate-pulse bg-slate-800 rounded-md"></p>
          <p className="w-[60%] h-8 mt-1 animate-pulse bg-slate-800 rounded-md"></p>
        </div>
        <div className="mb-4 w-full">
          <h2 className="mb-2 w-32 h-10 animate-pulse bg-slate-800 rounded-md"></h2>
          <div className="animate-pulse bg-slate-800 rounded-md w-full h-12 "></div>
        </div>
        {/* {project.imageSliderURLs && project.imageSliderURLs.length > 0 && ( */}
        <div className="w-full">
          <h2 className="mb-2 w-28 h-10 animate-pulse bg-slate-800 rounded-md"></h2>
          <div className="w-[100%] h-96 animate-pulse bg-slate-800 mx-auto rounded-md"></div>
        </div>
        {/* )} */}
        <div className="w-full mt-6 mb-4 md:mb-8">
          <h2 className="mb-2 w-40 h-10 animate-pulse bg-slate-800 rounded-md"></h2>
          <p className="w-full h-8 animate-pulse bg-slate-800 rounded-md"></p>
          <p className="w-full h-8 animate-pulse bg-slate-800 rounded-md mt-1"></p>
          <p className="w-full h-8 animate-pulse bg-slate-800 rounded-md mt-1"></p>
        </div>
        <div className="w-full mt-6 mb-4 md:mb-8">
          <h2 className="mb-2 w-40 h-10 animate-pulse bg-slate-800 rounded-md"></h2>
          <p className="w-full h-8 animate-pulse bg-slate-800 rounded-md"></p>
          <p className="w-full h-8 animate-pulse bg-slate-800 rounded-md mt-1"></p>
          <p className="w-full h-8 animate-pulse bg-slate-800 rounded-md mt-1"></p>
        </div>
      </div>
    </div>
  );
}
