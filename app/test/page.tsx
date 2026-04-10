"use client"

export default function Test() {
  let projectData = {
    "1": {
      "name": "心動收容所",
      "imageurl": "/aboutMeMe.jpg",
    },
    "2": {
      "name": "Syphony",
      "imageurl": "/hobbyWatching.jpg",
    }
  };


  return (
    <>
    
      <div className="bg-white h-full w-full p-3 leading-loose">
        <div className="text-[32px] font-bold">阿公</div>
        <div className="text-[16px] text-gray-600">67676767</div>

        <div className="grid grid-cols-3 auto-rows-[160px] gap-4 m-[26px]">

          <div
            className="relative bg-center bg-cover bg-no-repeat bg-amber-100 rounded-2xl h-full flex justify-center items-center row-span-2 overflow-hidden"
            style={{ backgroundImage: `url(${projectData["1"]["imageurl"]})` }}
          >

            <div className="absolute  bottom-0 text-white bg-yellow-700/15 w-full h-20 flex justify-center items-center backdrop-blur-sm rounded-2xl">專案1</div>
            {projectData["1"]["name"]}

          </div>

          <div
            className="relative bg-center bg-cover bg-no-repeat bg-amber-100 rounded-2xl h-full flex justify-center items-center overflow-hidden"
            style={{ backgroundImage: `url(${projectData["2"]["imageurl"]})` }}
          >

            <div className="absolute  bottom-0 text-white bg-yellow-700/15 w-full h-20 flex justify-center items-center backdrop-blur-sm rounded-2xl">專案2</div>
            {projectData["2"]["name"]}
            
          </div>

          
          <div className="bg-amber-100 rounded-2xl h-40 flex justify-center items-center">專案3</div>
          <div className="bg-amber-100 rounded-2xl h-full flex justify-center items-center row-span-2">專案4</div>
          <div className="bg-amber-100 rounded-2xl h-40 flex justify-center items-center">專案5</div>
          <div className="bg-amber-100 rounded-2xl h-40 flex justify-center items-center">專案6</div>
          <div className="bg-amber-100 rounded-2xl h-40 flex justify-center items-center">專案7</div>
          <div className="bg-amber-100 rounded-2xl h-40 flex justify-center items-center col-span-3">專案8</div>

        </div>
      </div>


    </>
  );
}
