import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef , useEffect } from "react";
import toast from "react-hot-toast";

export default function ShareModal({ open, onClose, job }) {
  if (!open) return null;
  const shareModelRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shareModelRef.current && !shareModelRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const url = `${window.location.origin}/jobs/${job.public_id}`;

  const shareToWhatsApp = () => {
    const text = `${job.title} at ${job.company} \n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    onClose();
    toast.success("Link copied!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      
      {/* BOX */}
      <div ref={shareModelRef} className="bg-white dark:bg-gray-900 w-[90%] max-w-sm rounded-xl p-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[var(--text)] font-semibold">Share Job</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* OPTIONS */}
        <div className="flex flex-col gap-3">

          {/* WhatsApp */}
          <button
            onClick={shareToWhatsApp}
            className="p-3 rounded-lg bg-green-500 text-white"
          >
            Share on WhatsApp
          </button>

          {/* Copy */}
          <button
            onClick={copyLink}
            className="p-3 text-[var(--background)] bg-[var(--text)] rounded-lg border"
          >
            Copy Link
          </button>

        </div>

      </div>
    </div>
  );
}