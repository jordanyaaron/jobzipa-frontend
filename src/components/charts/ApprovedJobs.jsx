import { PieChart, Pie, ResponsiveContainer } from "recharts";


export default function ApprovedJobChart({data}) {
  return (
    <div className="w-full h-[140px] relative">
      <ResponsiveContainer>
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