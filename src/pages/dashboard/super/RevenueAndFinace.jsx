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
    <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
      <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
        <h1 className="text-lg md:text-2xl font-bold">Finance Revenue</h1>

        <div className="flex gap-2 w-full md:w-auto min-w-0">
          {/* Search */}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
              className="
                w-full md:w-[250px]
                px-3 py-2 rounded-lg border
                border-[var(--border)]
                bg-[var(--background)]
                text-sm
              "
          />
          <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="
                w-full md:w-[250px]
                px-3 py-2 rounded-lg border
                border-[var(--border)]
                bg-[var(--background)]
                text-sm
              "
          />
          <select
            value={placementFilter}
            onChange={(e) => setPlacementFilter(e.target.value)}
            className="
              px-3 py-2 rounded-lg border 
              border-[var(--border)] 
              bg-[var(--background)] text-sm
            "
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
      </div>

      {/* Table */}
      <div 
        className="
          flex mt-16 lg:mt-0 
          overflow-x-auto  
          scrollbar-hide  gap-3 
          border border-[var(--border)]  rounded-lg
        "
      >
        <table className="min-w-[700px] w-full text-sm">
          <thead className="bg-[var(--hover)] text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Placement</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr className="border-t border-[var(--border)] hover:bg-[var(--hover)]">
                <td colSpan={4} className="p-3 whitespace-nowrap text-center py-4">
                  No data available
                </td>
              </tr>
            ) : (
              filteredData.map((item) => (
                <tr key={item.id} className="odd:bg-white even:bg-gray-50">
                  <td className="p-3 whitespace-nowrap">{item.id}</td>
                  <td className="p-3 whitespace-nowrap">{item.placement}</td>
                  <td className="p-3 whitespace-nowrap">${item.amount}</td>
                  <td className="p-3 whitespace-nowrap">{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr className="bg-[var(--hover)] font-semibold">
              <td colSpan={2} className="p-3 whitespace-nowrap text-right">
                Total:
              </td>
              <td className="p-3 whitespace-nowrap">${totalAmount}</td>
              <td className="p-3 whitespace-nowrap"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default RevenueAndFinace;