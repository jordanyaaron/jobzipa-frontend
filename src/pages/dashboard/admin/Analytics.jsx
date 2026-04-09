

import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function AnalyticsAdmin() {
  return (
    <div className="w-full p-3  h-[70vh] flex items-center justify-center">
      
      <div className="max-w-md w-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] text-center space-y-4 shadow-sm">
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-blue-100">
            <ChartBarIcon className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold">
          Analytics Dashboard
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-500">
          We are currently building powerful analytics tools to help you track
          performance, earnings, and system activity.
        </p>

        {/* Spinner */}
        <div className="flex justify-center">
          <span className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
        </div>

        {/* Status */}
        <p className="text-xs text-gray-400">
          In progress... coming soon 🚀
        </p>

      </div>

    </div>
  );
}