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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="
              p-4 rounded-2xl
              border border-[var(--border)]
              bg-[var(--background)]
              space-y-4
              shadow-sm
            "
          >
            {/* Title */}
            <SkeletonBlock className="h-5 w-3/4" />
  
            {/* Company */}
            <SkeletonBlock className="h-4 w-1/2" />
  
            {/* Description */}
            <div className="space-y-2">
              <SkeletonBlock className="h-3 w-full" />
              <SkeletonBlock className="h-3 w-5/6" />
              <SkeletonBlock className="h-3 w-2/3" />
            </div>
  
            {/* Tags / meta */}
            <div className="flex gap-2">
              <SkeletonBlock className="h-5 w-16 rounded-full" />
              <SkeletonBlock className="h-5 w-20 rounded-full" />
            </div>
  
            {/* Footer */}
            <div className="flex justify-between items-center pt-2">
              <SkeletonBlock className="h-4 w-20" />
              <SkeletonBlock className="h-9 w-24 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    );
  };