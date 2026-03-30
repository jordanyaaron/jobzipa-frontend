import React, { useState , useRef , useCallback } from "react";
import { Link , useOutletContext } from "react-router-dom";
import Cropper from "react-easy-crop";
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
    <div className="mt-[64px] lg:m-0 p-4 lg:p-6 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4">

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
      <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--background)]">
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
  return (
    <>
      <h1>Visitors</h1>
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


function Staffs () {
  return (
    <>
      <h1>Staffs</h1>
    </>
  )
}