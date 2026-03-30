import React, { useState , useEffect , useRef , useCallback } from "react";
import { Link , useOutletContext } from "react-router-dom";
import { UserGroupIcon , EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {generateVisitors} from "@/data/visitors"
import { 
  format, startOfWeek, 
  startOfMonth, 
  startOfYear, addWeeks, 
  addMonths, addYears, 
  subWeeks, subMonths, 
  subYears, endOfWeek, 
  endOfMonth, endOfYear 
} from "date-fns";
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
  const [ range , setRange ] = useState('week')
  const [ startDate , setStartDate ] = useState(new Date())
  const [ dropdownOpen , setDropdownOpen ] = useState(false)
  const dropdownRef = useRef()

  const today = new Date();

  const currentWeekStart = startOfWeek(today, { weekStartsOn: 1 });
  const currentMonthStart = startOfMonth(today);
  const currentYearStart = startOfYear(today);

  const minStartDate = new Date(2026, 0, 1); // Jan 1, 2026

  const visitors = 1245;
  const todayVisitors = 320;
  const growth = 12;

  function prevRange() {
    if(range === "week") {
      const prev = subWeeks(startDate, 1);
      if(prev >= minStartDate) setStartDate(prev);
    } else if(range === "month") {
      const prev = subMonths(startDate, 1);
      if(prev >= minStartDate) setStartDate(prev);
    } else if(range === "year") {
      const prev = subYears(startDate, 1);
      if(prev >= minStartDate) setStartDate(prev);
    }
  }
  
  function nextRange() {
    if(range === "week") {
      const next = addWeeks(startDate, 1);
      if(next <= currentWeekStart) setStartDate(next);
    } else if(range === "month") {
      const next = addMonths(startDate, 1);
      if(next <= currentMonthStart) setStartDate(next);
    } else if(range === "year") {
      const next = addYears(startDate, 1);
      if(next <= currentYearStart) setStartDate(next);
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const {start}  =  getRangeDates(range, startDate);
  const {end}  =  getRangeDates(range, startDate);
  const visitorsData = generateVisitors(  range , start );

  

  function getRangeDates(range, baseDate) {
    let start, end;
    if(range === "week") {
      start = startOfWeek(baseDate, { weekStartsOn: 1 }); // Monday
      end = endOfWeek(baseDate, { weekStartsOn: 1 });
    } else if(range === "month") {
      start = startOfMonth(baseDate);
      end = endOfMonth(baseDate);
    } else if(range === "year") {
      start = startOfYear(baseDate);
      end = endOfYear(baseDate);
    }
    return { start, end };
  }
  
  function formatRangeLabel(range, start, end) {
    if(range === "week") {
      const today = new Date();
      const lastWeekStart = subWeeks(today, 1);
      const thisWeekStart = startOfWeek(today, { weekStartsOn: 1 });
  
      if(start.getTime() === thisWeekStart.getTime()) return "This Week";
      if(start.getTime() === lastWeekStart.getTime()) return "Last Week";
      return `${format(start, "dd MMM")} - ${format(end, "dd MMM yy")}`;
    } else if(range === "month") {
      const thisMonth = new Date();
      if(start.getMonth() === thisMonth.getMonth() && start.getFullYear() === thisMonth.getFullYear()) return "This Month";
      return format(start, "MMM yyyy");
    } else if(range === "year") {
      return format(start, "yyyy");
    }
  }

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
      <div className="p-4 mt-[20px] rounded-2xl border border-[var(--border)] bg-[var(--background)]">
      
        <div className="relative w-full ">
          <div
            className="
              flex ml-10 items-center gap-3 mb-4
            "
          >
                <button 
                onClick={()=>prevRange(visitorsData)}
                disabled={
                  (range === "week" && subWeeks(startDate, 1) < minStartDate) ||
                  (range === "month" && subMonths(startDate, 1) < minStartDate) ||
                  (range === "year" && subYears(startDate, 1) < minStartDate)
                }
                className="px-3 py-1 bg-[var(--hover)] rounded-lg">&lt;</button>

              <span className="font-semibold">
                {formatRangeLabel(range, getRangeDates(range, startDate).start, getRangeDates(range, startDate).end)}
              </span>

              <button 
                onClick={()=>nextRange(visitorsData)} 
                disabled={
                  (range === "week" && addWeeks(startDate, 1) > currentWeekStart) ||
                  (range === "month" && addMonths(startDate, 1) > currentMonthStart) ||
                  (range === "year" && addYears(startDate, 1) > currentYearStart)
                }
                className="px-3 py-1 bg-[var(--hover)] rounded-lg"
              >&gt;</button>
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <EllipsisVerticalIcon className="h-6 w-6 text-[var(--text)]" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg z-50">
                {["week", "month", "year"].map((r) => (
                  <button
                    key={r}
                    onClick={() => { setRange(r); setDropdownOpen(false); }}
                    className="block px-4 py-2 text-sm hover:bg-[var(--hover)] capitalize"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <LineChart data={visitorsData}>
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