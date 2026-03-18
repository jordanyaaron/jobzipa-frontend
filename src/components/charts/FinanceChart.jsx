import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  export default function FinanceChart({ data }) {
    return (
      <div className="w-full h-[250px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
  
            <Tooltip />
  
            {/* Revenue */}
            <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
  
            {/* Staff Earnings */}
            <Bar dataKey="staff" fill="#f59e0b" radius={[6, 6, 0, 0]} />
  
            {/* Profit */}
            <Bar dataKey="profit" fill="#10b981" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }