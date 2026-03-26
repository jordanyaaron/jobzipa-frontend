import React, { useState } from "react";
import { revenueData } from "@/data/revenue";
import { v4 as uuidv4 } from "uuid";



const RevenueAndFinace = () => {
  // Filters
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [placementFilter, setPlacementFilter] = useState("all");

  // Filter logic
  const filteredData = revenueData.filter((item) => {
    const itemDate = new Date(item.date);

    // Date filter
    if (startDate && new Date(startDate) > itemDate) return false;
    if (endDate && new Date(endDate) < itemDate) return false;

    // Placement filter
    if (placementFilter !== "all" && item.placement !== placementFilter) return false;

    return true;
  });

  // Total amount
  const totalAmount = filteredData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finance Revenue</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />
        <select
          value={placementFilter}
          onChange={(e) => setPlacementFilter(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="all">All Placements</option>
          <option value="job_list">Job List</option>
          <option value="job_detail">Job Detail</option>
          <option value="sidebar">Sidebar</option>
          <option value="banner">Banner</option>
        </select>
        <button
          onClick={() => {
            setStartDate("");
            setEndDate("");
            setPlacementFilter("all");
          }}
          className="px-3 py-2 bg-gray-200 rounded-lg"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Placement</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No data available
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={item.id} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-2 border">{item.id}</td>
                  <td className="px-4 py-2 border capitalize">{item.placement}</td>
                  <td className="px-4 py-2 border">${item.amount}</td>
                  <td className="px-4 py-2 border">{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 font-semibold">
              <td colSpan={2} className="px-4 py-2 border text-right">
                Total:
              </td>
              <td className="px-4 py-2 border">${totalAmount}</td>
              <td className="px-4 py-2 border"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RevenueAndFinace;