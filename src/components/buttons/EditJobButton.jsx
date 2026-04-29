import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function EditJobFAB({ job, canEdit }) {
  const navigate = useNavigate();

  if (!canEdit) return null;

  return (
    <button
      onClick={() => navigate(`/jobs/edit/${job.public_id}`)}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-blue-600 hover:bg-blue-700
        text-white shadow-lg
        transition-all duration-200
      "
    >
      <PencilSquareIcon className="w-6 h-6" />
    </button>
  );
}