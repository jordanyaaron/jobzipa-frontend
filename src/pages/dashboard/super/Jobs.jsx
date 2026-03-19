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
    <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
  
      {/* Example chart */}
      <div className="block w-full h-[300px] border border-[var(--border)]"></div>

      {/* Scrollable row */}
      <div className="flex overflow-x-auto gap-3 h-[300px] border border-[var(--border)]">
        <div className="flex-shrink-0 w-[200px] h-[200px] border border-[var(--border)]"></div>
        <div className="flex-shrink-0 w-[200px] h-[200px] border border-[var(--border)]"></div>
        <div className="flex-shrink-0 w-[200px] h-[200px] border border-[var(--border)]"></div>
        <div className="flex-shrink-0 w-[200px] h-[200px] border border-[var(--border)]"></div>
      </div>
    </div>
  );
}