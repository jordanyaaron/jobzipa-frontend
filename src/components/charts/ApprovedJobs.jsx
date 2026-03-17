import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";


export default function ApprovedJobChart({data}) {
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setChartHeight(130); // small screens
      else if (window.innerWidth < 1095) setChartHeight(250); // md screens
      else setChartHeight(260); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full relative flex justify-center items-center">
  <ResponsiveContainer width="100%" height={chartHeight}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"      // center vertically
        startAngle={180}
        endAngle={0}
        innerRadius="60%"
        outerRadius="80%"
        paddingAngle={4}
        dataKey="value"
      />
    </PieChart>
  </ResponsiveContainer>

  {/* Center Content */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
    <p className="text-sm opacity-70 hidden md:block">Participants</p>
    <h2 className="text-xl md:text-2xl font-bold">120</h2>
  </div>
</div>
  );
}