import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

export default function PayoutDonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="relative w-full h-[180px] md:h-[240px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="65%"
            outerRadius="85%"
            paddingAngle={3}
            dataKey="value"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-xs md:text-sm opacity-70">Total Payouts</p>
        <h2 className="text-lg md:text-2xl font-bold">
          {total.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}