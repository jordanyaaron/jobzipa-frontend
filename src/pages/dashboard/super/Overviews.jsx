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
            >Jobs</h1>
            <div
              className="
                w-full
                grid grid-cols-2 md:grid-cols-3
                gap-2
              "
            >
              <div
                className="
                  grid grid-cols-2 md:grid-cols-4 
                  gap-2
                  col-span-2
                  min-h-[360px]
                  rounded-lg
                "
              >
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                  "
                >
                  <p className="text-sm opacity-70">Total Jobs</p>
                  <h2 className="text-2xl font-bold">120</h2>
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                  "
                >
                  <p className="text-sm opacity-70">Total Jobs</p>
                  <h2 className="text-2xl font-bold">120</h2>
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                  "
                >
                  <p className="text-sm opacity-70">Total Jobs</p>
                  <h2 className="text-2xl font-bold">120</h2>
                </div>
                <div 
                  className="
                    p-4 border rounded-lg 
                    border-[var(--border)]
                    col-span-1
                    md:col-span-2
                  "
                >
                  <p className="text-sm opacity-70">Total Jobs</p>
                  <h2 className="text-2xl font-bold">120</h2>
                </div>
              </div>

              <div
                className="
                  md:col-span-1
                  min-h-[280px]
                  border border-[var(--border)]
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





