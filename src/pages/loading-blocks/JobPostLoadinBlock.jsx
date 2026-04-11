  const SkeletonBlock = ({ className = "" }) => (
    <div
      className={`
        ${className}
        rounded
        bg-gradient-to-r
        from-[var(--hover)]
        via-gray-300/40
        to-[var(--hover)]
        animate-[pulse_1.5s_ease-in-out_infinite]
      `}
    />
  );
  
  export default function JobsSkeleton(){
    return (
      <div
        className="
          w-full
          lg:w-[700px]
        "
      >
        <div className="grid grid-cols-1  pt-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="
                p-4 
                space-y-4
                border-b border-[var(--border)]
              "
            >
              {/* header */}
              <div className="flex gap-2">
                <div className="w-10 h-10" > <SkeletonBlock className="h-10 w-10 rounded-full" /></div>
                <div className="flex-1 flex justify-between items-center " > 
                  <SkeletonBlock className="h-4 w-1/2  rounded-xl" />
                  <SkeletonBlock className="h-4 w-10 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col gap-2 my-3">
                <SkeletonBlock className="h-5 w-full rounded-sm" />
                <SkeletonBlock className="h-5 w-1/3  rounded-sm" />
              </div>
              <div className="flex  gap-2 my-3">
                <SkeletonBlock className="h-6 w-6 rounded-sm" />
                <SkeletonBlock className="h-6 w-6  rounded-sm" />
              </div>

              {/* <SkeletonBlock className="h-5 w-3/4" />
    
              <SkeletonBlock className="h-4 w-1/2" />
    
              <div className="space-y-2">
                <SkeletonBlock className="h-3 w-full" />
                <SkeletonBlock className="h-3 w-5/6" />
                <SkeletonBlock className="h-3 w-2/3" />
              </div>
    
              <div className="flex gap-2">
                <SkeletonBlock className="h-5 w-16 rounded-full" />
                <SkeletonBlock className="h-5 w-20 rounded-full" />
              </div>
    
              <div className="flex justify-between items-center pt-2">
                <SkeletonBlock className="h-4 w-20" />
                <SkeletonBlock className="h-9 w-24 rounded-lg" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    );
  };