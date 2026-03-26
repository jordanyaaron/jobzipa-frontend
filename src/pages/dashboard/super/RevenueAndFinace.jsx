import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { revenueData } from "@/data/revenue";

// -------------------- Sample Data --------------------


// -------------------- Page Component --------------------
const RevenueAndFinace = () => {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredData = revenueData.filter((item) => {
    if (!startDate && !endDate) return true;

    const itemDate = new Date(item.date);

    if (startDate && new Date(startDate) > itemDate) return false;
    if (endDate && new Date(endDate) < itemDate) return false;

    return true;
  });

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-4">

        {/* Start Date */}
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />

        {/* End Date */}
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />

        {/* Placement Filter */}
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

        </div>
      <div>
        {filteredData.map((item) => (
          <p key={item.id}>
            {item.placement} - ${item.amount} - {item.date}
          </p>
        ))}
      </div>
    </>
    
  );
};

export default RevenueAndFinace;