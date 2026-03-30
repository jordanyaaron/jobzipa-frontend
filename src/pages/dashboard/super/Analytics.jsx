import React, { useState , useRef , useCallback } from "react";
import { Link , useOutletContext } from "react-router-dom";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import Cropper from "react-easy-crop";
import { 
  LineChart, 
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", visitors: 200 },
  { day: "Tue", visitors: 400 },
  { day: "Wed", visitors: 300 },
  { day: "Thu", visitors: 500 },
  { day: "Fri", visitors: 450 },
  { day: "Sat", visitors: 600 },
  { day: "Sun", visitors: 700 },
];

import {
  PlusIcon , EyeIcon , 
  CheckIcon , XMarkIcon ,
  EyeSlashIcon
} from "@heroicons/react/24/outline";
export default function AnalyticsSuper() {
  const {
    startDate, setStartDate,
    endDate, setEndDate,
    analyticsFilter, setAnalyticsFilter,
  } = useOutletContext();

  return (
    <div className="mt-[64px] lg:m-0 p-2 lg:p-6 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4">

      <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
        <h1 className="text-lg md:text-2xl font-bold">Analytics</h1>

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
                w-full md:w-[180px]
                px-3 py-2 rounded-lg border
                border-[var(--border)]
                bg-[var(--background)]
                text-sm
              "
          />
          <select
            value={analyticsFilter}
            onChange={(e) => setAnalyticsFilter(e.target.value)}
            className="
              px-3 py-2 rounded-lg border 
              border-[var(--border)] 
              bg-[var(--background)] text-sm
            "
          >
            <option value="visitor">Visitors</option>
            <option value="revenue">Revenue</option>
          </select>
          <button
            onClick={() => {
              startDate("");
              setEndDate("");
              setAnalyticsFilter("visitor");
            }}
            className="px-3 py-2 bg-green-600 rounded-lg"
          >
            Reset
          </button>

        </div>
      </div>
      {/* Content */}
      <div className="pt-4 px-0 bg-[var(--background)]">
        {analyticsFilter === "revenue" && <Reveniew />}
        {analyticsFilter === "visitor" && <Visitors />}
        {analyticsFilter === "jobs" && <Jobs />}
        {analyticsFilter === "staffs" && <Staffs />}
      </div>

    </div>
  );
}

function Reveniew () {
  return (
    <>
      <h1>Reveniew</h1>
    </>
  )
}

function Visitors () {
  const visitors = 1245;
  const todayVisitors = 320;
  const growth = 12;
  return (
    <>
      <div className="
        p-4 rounded-2xl
        bg-[var(--background)]
        border border-[var(--border)]
        transition-all duration-300
        hover:shadow-lg hover:scale-[1.02]
      ">
        
        {/* Top */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">Visitors</p>

          <span className="p-2 rounded-lg bg-blue-100 text-blue-600">
            <UserGroupIcon className="h-5 w-5" />
          </span>
        </div>

        {/* Number */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold">{visitors}</h2>
          <p className="text-xs text-gray-400">{todayVisitors} today</p>
        </div>

        {/* Mini Chart */}
        <MiniChart data={data} />

        {/* Growth */}
        <div className={`mt-2 text-sm ${growth >= 0 ? "text-green-500" : "text-red-500"}`}>
          {growth >= 0 ? "↑" : "↓"} {Math.abs(growth)}% this week
        </div>

      </div>
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

function Jobs () {
  return (
    <>
      <h1>Jobs</h1>
    </>
  )
}



function MiniChart({ data }) {
  return (
    <div className="w-full h-[60px] mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


function Staffs () {
  return (
    <>
      <h1>Staffs</h1>
    </>
  )
}