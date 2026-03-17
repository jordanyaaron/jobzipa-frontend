import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";


export default function ApprovedJobChart({data}) {
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setChartHeight('80px'); // small screens
      else if (window.innerWidth < 1095) setChartHeight('100px'); // md screens
      else setChartHeight('300px'); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full h-[140px] relative">
      <ResponsiveContainer 
        height={chartHeight}
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={110}
            paddingAngle={4}
            dataKey="value"
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Center Content */}
      <div className="absolute top-3 bottom-3 left-1/2 -translate-x-1/2 text-center">
        <p className="text-sm opacity-70">Total Jobs</p>
        <h2 className="text-xl md:text-2xl font-bold">120</h2>
      </div>
    </div>
  );
}