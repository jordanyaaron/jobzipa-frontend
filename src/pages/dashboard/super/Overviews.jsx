export default function OverviewsSuper(){
  return(
    <>
      <div
        className="
          h-auto
          w-full  max-w-[1144px]
          block  
          bg-(--main-bg)
          mx-auto  p-6 pt-3
        "
      >
        
        <div 
            className="
              block  w-full 
              mb-20px
              pb-[20px]
              overflow-y-auto
            "
          >
            <h1
              className="
                text-2xl 
                mb-[20px]
              "
            >Overview name</h1>
            <div
              className="
                w-full
                grid grid-cols-1 md:grid-cols-3
                gap-2
              "
            >
              <div
                className="
                  bg-(--card-primary)
                  md:col-span-2
                  min-h-[360px]
                  rounded-lg
                "
              ></div>

              <div
                className="
                  bg-(--card-primary)
                  md:col-span-1
                  min-h-[280px]
                  rounded-lg
                "
              ></div>
            </div>
        </div>

        <div 
            className="
              block  w-full 
              mb-20px
              pb-[20px]
              overflow-y-auto
            "
          >
            <h1
              className="
                text-2xl 
                mb-[20px]
              "
            >Overview name</h1>
            <div
              className="
                w-full
                grid grid-cols-1 md:grid-cols-2
                gap-2
              "
            >
              <div
                className="
                  bg-(--card-primary)
                  md:col-span-1
                  min-h-[280px]
                  rounded-lg
                "
              ></div>
              <div
                className="
                  bg-(--card-primary)
                  md:col-span-1
                  min-h-[280px]
                  rounded-lg
                "
              ></div>

              
            </div>
          </div>

          <div 
            className="
              block  w-full 
              mb-20px
              overflow-y-auto
            "
          >
            <h1
              className="
                text-2xl 
                mb-[20px]
              "
            >Overview name</h1>
            <div
              className="
                w-full
                grid grid-cols-1 md:grid-cols-3
                gap-2
              "
            >
              <div
                className="
                  bg-(--card-primary)
                  md:col-span-1
                  min-h-[280px]
                  rounded-lg
                "
              ></div>
              <div
                className="
                  bg-(--card-primary)
                  md:col-span-2
                  min-h-[280px]
                  rounded-lg
                "
              ></div>

              
            </div>
          </div>
      </div>
    </>
  );
}





