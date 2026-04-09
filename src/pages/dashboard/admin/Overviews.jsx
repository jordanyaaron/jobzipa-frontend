import React from "react";
import {
  BriefcaseIcon,
  UsersIcon,
  BanknotesIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function OverviewsAdmin() {

  // 🔢 Stats data
  const stats = [
    {
      title: "Total Jobs",
      value: 120,
      icon: <BriefcaseIcon className="w-6 h-6" />,
    },
    {
      title: "Active Jobs",
      value: 80,
      icon: <BriefcaseIcon className="w-6 h-6 text-green-600" />,
    },
    {
        title: "My Jobs Post",
        value: 10,
        icon: <BriefcaseIcon className="w-6 h-6 text-blue-600" />,
      },
    {
      title: "Staff",
      value: 25,
      icon: <UsersIcon className="w-6 h-6" />,
    },
    
    {
      title: "Pending Payouts",
      value: 12,
      icon: <BanknotesIcon className="w-6 h-6 text-yellow-600" />,
    },
    {
      title: "Reports",
      value: 6,
      icon: <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />,
    },
  ];

  // 🧾 Sample data
  const recentActivity = [
    "John posted a new job",
    "Mary requested payout",
    "Admin approved payout",
    "New staff registered",
  ];

  const payouts = [
    { id: 1, username: "john_doe", amount: "150,000" },
    { id: 2, username: "mary_jane", amount: "85,000" },
    { id: 3, username: "alex", amount: "60,000" },
  ];

  const reports = [
    { id: 1, jobTitle: "Frontend Developer" },
    { id: 2, jobTitle: "Backend Engineer" },
    { id: 3, jobTitle: "UI Designer" },
  ];

  return (
    <div className="p-4 mt-[65px] lg:mt-0  space-y-4">

      {/* 🔝 Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {stats.map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-gray-500">{item.title}</p>
              <h2 className="text-lg font-bold">{item.value}</h2>
            </div>
            {item.icon}
          </div>
        ))}
      </div>

      {/* 🔽 Bottom Sections */}
      <div className="grid lg:grid-cols-3 gap-4">

        {/* 📈 Recent Activity */}
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <h3 className="font-semibold mb-3">Recent Activity</h3>
          <ul className="space-y-2 text-sm">
            {recentActivity.map((act, i) => (
              <li key={i} className="text-gray-600">{act}</li>
            ))}
          </ul>
        </div>

        {/* 💰 Pending Payouts */}
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <h3 className="font-semibold mb-3">Pending Payouts</h3>
          <div className="space-y-2 text-sm">
            {payouts.map((p) => (
              <div key={p.id} className="flex justify-between">
                <span>{p.username}</span>
                <span className="font-medium">{p.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🚨 Reports */}
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <h3 className="font-semibold mb-3">Reports</h3>
          <div className="space-y-2 text-sm">
            {reports.map((r) => (
              <div key={r.id} className="text-gray-600">
                {r.jobTitle}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}