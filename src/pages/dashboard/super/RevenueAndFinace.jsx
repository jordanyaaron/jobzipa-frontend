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
    <div>
      {filteredData.map((item) => (
        <p key={item.id}>
          {item.placement} - ${item.amount} - {item.date}
        </p>
      ))}
    </div>
  );
};

export default RevenueAndFinace;