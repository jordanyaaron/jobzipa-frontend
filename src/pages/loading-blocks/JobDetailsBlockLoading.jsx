// import SkeletonBlock from "@/components/SkeletonBlock";
import SkeletonBlock from "@/components/skeletons/JobZipaSkeleton";

export default function JobDetailSkeleton() {
  return (
    <div
            className="
              w-full
              lg:w-[600px]
            "
    >
        <div className="grid grid-cols-1 pt-6 gap-1">

            {/* MAIN CONTENT */}
            <div className=" space-y-4 ">

                {/* Header */}
                <div className="p-2  space-y-3">
                <div className="flex gap-2">
                    <div className="w-10 h-10" > <SkeletonBlock className="h-10 w-10 rounded-full" /></div>
                    <div className="flex-1 flex justify-between items-center " > 
                      <SkeletonBlock className="h-4 w-1/2  rounded-xl" />
                      <SkeletonBlock className="h-4 w-10 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-2 space-y-3">
                    <SkeletonBlock className="h-5 w-1/4" />
                    <SkeletonBlock className="h-4 w-full" />
                    <SkeletonBlock className="h-4 w-full" />
                    <SkeletonBlock className="h-4 w-5/6" />
                    <SkeletonBlock className="h-4 w-2/3" />
                    <SkeletonBlock className="h-4 w-1/3" />
                    <SkeletonBlock className="h-4 w-2/3" />
                    <SkeletonBlock className="h-4 w-1/4" />
                </div>

                {/* Extra Section */}
                <div className="p-2 mb-10 space-y-3">
                    <SkeletonBlock className="h-5 w-1/3" />
                    <SkeletonBlock className="h-4 w-full" />
                    <SkeletonBlock className="h-4 w-4/5" />
                    <SkeletonBlock className="h-4 w-3/5" />
                </div>

                {/* Extra Section */}
                <div className="p-2 space-y-3">
                    <SkeletonBlock className="h-5 w-2/5" />
                    <SkeletonBlock className="h-4 w-4/5" />
                    <SkeletonBlock className="h-4 w-full" />
                    <SkeletonBlock className="h-4 w-3/5" />
                </div>

            </div>
        </div>
    </div>
        
  );
}