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
            block w-full h-[300] p-4 m-4 border border-[var(--boredr)]
        "
      ></div>
      <div
        className="
            block w-full h-[300] p-4 m-4 border border-[var(--boredr)]
        "
      ></div>
    </div>
  );
}