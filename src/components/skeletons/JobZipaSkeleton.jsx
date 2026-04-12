export default function  SkeletonBlock ({ className = "" }) {
    return (
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
    )
  };