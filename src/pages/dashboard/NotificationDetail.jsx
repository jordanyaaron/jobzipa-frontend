import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { notificationsData } from "@/data/notification";
import { formatNotificationTime } from "@/utils/time";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotificationDetail() {
  const { category, id } = useParams();
  const navigate = useNavigate();

  // Pata notification kulingana na id na type
  const notification = notificationsData.find(
    (n) => n.id === parseInt(id) && n.category === category
  );

  if (!notification) {
    return (
      <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 px-3 py-2 bg-gray-200 rounded-lg"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back
        </button>
        <p className="text-gray-500">Notification not found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4">
      
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-200 rounded-lg"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        Back
      </button>

      {/* Notification Detail */}
      <div className="border border-[var(--border)] rounded-lg p-4 bg-[var(--background)] shadow-sm">
        <h2 className="text-lg font-bold mb-2">Notification Details</h2>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Type: </span>
            <span className="capitalize">{notification.type.replace("_", " ")}</span>
          </p>
          <p>
            <span className="font-semibold">Category: </span>
            {notification.category}
          </p>
          <p>
            <span className="font-semibold">Message: </span>
            {notification.message}
          </p>
          <p>
            <span className="font-semibold">Date: </span>
            {formatNotificationTime(notification.date)}
          </p>
        </div>
      </div>
    </div>
  );
}