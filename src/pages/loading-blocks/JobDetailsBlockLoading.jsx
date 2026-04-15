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
        <div className="grid grid-cols-1  gap-6">

            {/* MAIN CONTENT */}
            <div className=" space-y-4">

                {/* Header */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border space-y-3">
                <SkeletonBlock className="h-6 w-2/3" />
                <SkeletonBlock className="h-4 w-1/3" />
                </div>

                {/* Description */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border space-y-3">
                <SkeletonBlock className="h-5 w-1/4" />

                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-5/6" />
                <SkeletonBlock className="h-4 w-2/3" />
                </div>

                {/* Extra Section */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl border space-y-3">
                <SkeletonBlock className="h-5 w-1/3" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-4/5" />
                </div>

            </div>
        </div>
    </div>
        
  );
}