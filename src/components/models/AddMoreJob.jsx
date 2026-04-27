import React from "react";

export default function JobSuccessModal({ open, onClose, onPostAnother }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-xl">
        
        <h2 className="text-xl font-semibold mb-2">
          Job posted successfully 🎉
        </h2>

        <p className="text-gray-600 mb-6">
          Do you want to post another job for the same company?
        </p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            No
          </button>

          <button
            onClick={onPostAnother}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Yes, Post Another
          </button>
        </div>

      </div>
    </div>
  );
}