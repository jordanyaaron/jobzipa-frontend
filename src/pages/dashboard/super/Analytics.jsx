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

      <h1 className="hidden lg:block text-2xl font-bold">Analytics</h1>
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