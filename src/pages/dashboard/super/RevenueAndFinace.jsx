import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// -------------------- Sample Data --------------------
const placements = ["job_list", "job_detail", "sidebar", "banner"];
const placementLabels = {
  job_list: "Job List Page",
  job_detail: "Job Detail Page",
  sidebar: "Sidebar Ads",
  banner: "Banner Ads",
};

function randomDate(start, end) {
  const date = new Date(+start + Math.random() * (end - start));
  return date.toISOString().split("T")[0];
}

// 20 sample revenue records
const revenueData = Array.from({ length: 20 }).map(() => ({
  id: uuidv4(),
  placement: placements[Math.floor(Math.random() * placements.length)],
  amount: Math.floor(Math.random() * 3000) + 200,
  date: randomDate(new Date(2024, 0, 1), new Date()),
}));

// -------------------- Page Component --------------------
const RevenueAndFinace = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter by date
  const filteredData = revenueData.filter((item) => {
    if (!startDate && !endDate) return true;
    const itemDate = new Date(item.date);
    if (startDate && new Date(startDate) > itemDate) return false;
    if (endDate && new Date(endDate) < itemDate) return false;
    return true;
  });

  // Total revenue
  const totalRevenue = filteredData.reduce((acc, item) => acc + item.amount, 0);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Advertising Revenue
        </h1>

        {/* Date Filters */}
        <div className="flex gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <button
            onClick={() => {
              setStartDate("");
              setEndDate("");
            }}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Revenue Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm text-gray-500 uppercase">
                Placement
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-500 uppercase">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray-500 uppercase">
                Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                    {placementLabels[item.placement]}
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    ${item.amount}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>

          {/* Table Footer / Total */}
          <tfoot className="bg-gray-50 dark:bg-gray-700 font-semibold">
            <tr>
              <td className="px-6 py-3">Total</td>
              <td className="px-6 py-3 text-green-600">${totalRevenue}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
};

export default RevenueAndFinace;