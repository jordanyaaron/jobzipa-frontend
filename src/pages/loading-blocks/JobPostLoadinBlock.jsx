 import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";
  export default function JobsSkeleton(){
    return (
      <>
        <div className="w-fulll flex gap-2">
          
        </div>
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
                </div>
              ))}
            </div>
          </div>
      </>
    );
  };