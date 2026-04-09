import React from "react";
import {
  BriefcaseIcon,
  UsersIcon,
  BanknotesIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function OverviewsAdmin() {

  // 🔢 STATS
  const stats = [
    { title: "Total Jobs", value: 120, icon: <BriefcaseIcon className="w-5 h-5" /> },
    { title: "Active Jobs", value: 80, icon: <BriefcaseIcon className="w-5 h-5 text-green-600" /> },
    { title: "Staff", value: 25, icon: <UsersIcon className="w-5 h-5" /> },
    { title: "Reports", value: 6, icon: <ExclamationTriangleIcon className="w-5 h-5 text-red-600" /> },

    // 💰 Monetization
    { title: "Earnings", value: "TSh 2.4M", icon: <BanknotesIcon className="w-5 h-5 text-green-600" /> },
    { title: "Paid Out", value: "TSh 1.8M", icon: <BanknotesIcon className="w-5 h-5" /> },
    { title: "Pending", value: "TSh 600K", icon: <BanknotesIcon className="w-5 h-5 text-yellow-600" /> },
  ];

  // 📈 ACTIVITY
  const activities = [
    "John posted a job",
    "Mary requested payout",
    "Admin approved payout",
    "New staff joined",
  ];

  // 💰 PAYOUTS
  const payouts = [
    { id: 1, username: "john_doe", amount: "150,000" },
    { id: 2, username: "mary_jane", amount: "85,000" },
    { id: 3, username: "alex", amount: "60,000" },
  ];

  // 🚨 REPORTS
  const reports = [
    { id: 1, jobTitle: "Frontend Developer" },
    { id: 2, jobTitle: "Backend Engineer" },
    { id: 3, jobTitle: "UI Designer" },
  ];

  // 💳 TRANSACTIONS
  const transactions = [
    { id: 1, type: "earning", amount: "TSh 50,000", status: "completed" },
    { id: 2, type: "withdraw", amount: "TSh 120,000", status: "pending" },
    { id: 3, type: "earning", amount: "TSh 30,000", status: "completed" },
    { id: 4, type: "withdraw", amount: "TSh 80,000", status: "failed" },
  ];

  return (
    <div className="p-4 mt-[65px] lg:mt-0  space-y-4">

      {/* 🔝 STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
        {stats.map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-gray-500">{item.title}</p>
              <h2 className="text-sm font-bold">{item.value}</h2>
            </div>
            {item.icon}
          </div>
        ))}
      </div>

      {/* 🔽 MAIN GRID */}
      <div className="grid lg:grid-cols-3 gap-4">

        {/* 📈 ACTIVITY */}
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <h3 className="font-semibold mb-3">Recent Activity</h3>
          <ul className="space-y-2 text-sm">
            {activities.map((a, i) => (
              <li key={i} className="text-gray-600">{a}</li>
            ))}
          </ul>
        </div>

        {/* 💰 PAYOUTS */}
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

        {/* 🚨 REPORTS */}
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <h3 className="font-semibold mb-3">Reports</h3>
          <div className="space-y-2 text-sm">
            {reports.map((r) => (
              <div key={r.id}>{r.jobTitle}</div>
            ))}
          </div>
        </div>

        {/* 💳 MONETIZATION */}
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <h3 className="font-semibold mb-3">Monetization</h3>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-500">Earnings</p>
              <p className="font-bold text-green-600">TSh 2,400,000</p>
            </div>

            <div>
              <p className="text-gray-500">Paid</p>
              <p className="font-bold">TSh 1,800,000</p>
            </div>

            <div>
              <p className="text-gray-500">Pending</p>
              <p className="font-bold text-yellow-600">TSh 600,000</p>
            </div>

            <div>
              <p className="text-gray-500">Transactions</p>
              <p className="font-bold">320</p>
            </div>
          </div>
        </div>

        {/* 💸 TRANSACTIONS */}
        <div className="lg:col-span-2 p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <h3 className="font-semibold mb-3">Recent Transactions</h3>

          <div className="space-y-2 text-sm">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex justify-between">
                <span className="capitalize">{tx.type}</span>
                <span>{tx.amount}</span>
                <span
                  className={
                    tx.status === "completed"
                      ? "text-green-600"
                      : tx.status === "pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {tx.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}