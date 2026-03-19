import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function JobsSuper() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      staff: "John",
      status: "active",
      views: 120,
      date: "2026-03-18",
    },
    {
      id: 2,
      title: "Backend Engineer",
      staff: "Mary",
      status: "pending",
      views: 80,
      date: "2026-03-17",
    },
  ];

  return (
    <div className="p-4 w-full space-y-4 overflow-x-hidden">
      <div
        className="
            block w-full h-[300px]   border border-[var(--border)]
        "
      ></div>
      <div
        className="
            block w-full h-[300px]  border border-[var(--border)]
        "
      >
      </div>
      <div
        className="
          inline-block w-100  h-[200]  border border-[var(--border)]
        "
      ></div>
        <div
          className="
            inline-block w-100  h-[200]  border border-[var(--border)]
          "
        ></div>
    </div>
  );
}