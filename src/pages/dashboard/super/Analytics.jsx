import React, { useState , useRef , useCallback } from "react";
import { Link , useOutletContext } from "react-router-dom";
import Cropper from "react-easy-crop";
import {
  PlusIcon , EyeIcon , 
  CheckIcon , XMarkIcon ,
  EyeSlashIcon
} from "@heroicons/react/24/outline";
export default function AnalyticsSuper() {
const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "reveniew", label: "Reveniew" },
    { id: "reveniew", label: "Reveniew" },
    { id: "jobs", label: "Jobs" },
    { id: "staffs", label: "Staffs" },
  ];

  return (
    <div className="mt-[64px] lg:m-0 p-4 lg:p-6 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4">

      <h1 className="hidden lg:block text-2xl font-bold">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 rounded-lg text-sm whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-black text-white" 
                : "bg-[var(--hover)] text-[var(--text)]"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--background)]">
        {activeTab === "reveniew" && <Reveniew />}
        {activeTab === "visitor" && <Visitors />}
        {activeTab === "Jobs" && <Jobs />}
        {activeTab === "staffs" && <Staffs />}
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