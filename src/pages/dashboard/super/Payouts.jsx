import { Link , useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  EyeIcon,PlusIcon,
  PencilSquareIcon,
  TrashIcon, UserPlusIcon
} from "@heroicons/react/24/outline";

export default function SuperPayouts() {
  const { payoutFilter, setPayoutFilter, searchQuery, setSearchQuery } = useOutletContext();
  
 
  
  const staffNames = [
    "John Doe", "Jane Smith", "Michael Brown", "Lisa White",
    "David Johnson", "Emma Davis", "William Miller", "Olivia Wilson",
    "James Taylor", "Sophia Anderson", "Robert Thomas", "Ava Jackson",
    "Charles Harris", "Isabella Martin", "Daniel Thompson", "Mia Garcia",
    "Matthew Martinez", "Amelia Robinson", "Joseph Clark", "Harper Lewis"
  ];
  
  const statuses = ["pending", "paid", "approved", "rejected"];
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    paid: "bg-green-100 text-green-800",
    approved: "bg-blue-100 text-blue-800",
    rejected: "bg-red-100 text-red-800",
  };
  
  function randomDate(start, end) {
    const date = new Date(+start + Math.random() * (end - start));
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
  }
  
  // Generate payout data
  const payoutData = staffNames.map((fullName) => {
    const [first, last] = fullName.split(" ");
    const username = `${first.toLowerCase()}.${last.toLowerCase()}`;
    return {
      id: uuidv4(),
      name: fullName,
      username,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      amount: Math.floor(Math.random() * 2000) + 100,
      date: randomDate(new Date(2023, 0, 1), new Date()), // random date 2023 till today
    };
  });

  const filteredPayoutData = payoutData.filter((item) => {
    const matchesFilter =
    payoutFilter === "all" || item.status === payoutFilter;
  
    const matchesSearch =
      (item.username?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
      (item.name?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ;
  
    return matchesFilter && matchesSearch;
  });
  return (
    <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
  
      <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
        <h1 className="text-lg md:text-2xl font-bold">Payouts</h1>

        <div className="flex gap-2 w-full md:w-auto min-w-0">
          {/* Search */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs..."
            className="
              w-full md:w-[250px]
              px-3 py-2 rounded-lg border
              border-[var(--border)]
              bg-[var(--background)]
              text-sm
            "
          />

          {/* Filter */}
          <select
            value={payoutFilter}
            onChange={(e) => setPayoutFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
          >
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      {/* Scrollable row */}
      <div className="flex mt-16 lg:mt-0 overflow-x-auto  scrollbar-hide  gap-3 border border-[var(--border)]  rounded-lg">
      <table className="min-w-[700px] w-full text-sm">
            <thead className="bg-[var(--hover)] text-left">
              <tr>
                <th className="p-3">Full Name</th>
                <th className="p-3">Usernamme</th>
                <th className="p-3">Status</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPayoutData.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-[var(--border)] hover:bg-[var(--hover)]"
                >
                  <td className="p-3 whitespace-nowrap">{item.full_name}</td>
                  <td className="p-3 whitespace-nowrap">{item.username}</td>

                  {/* Status */}
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[item.status]}`}>
                        {item.status}
                    </span>
                  </td>

                  <td className="p-3 whitespace-nowrap">{item.amount}</td>
                  <td className="p-3 whitespace-nowrap">{item.date}</td>

                  {/* Actions */}
                  <td className="p-3">
                    <div className="flex justify-end gap-2 whitespace-nowrap">
                      <button className="p-2 hover:bg-[var(--hover)] rounded">
                        <EyeIcon className="h-4 w-4" />
                      </button>

                      <button className="p-2 hover:bg-[var(--hover)] rounded">
                        <PencilSquareIcon className="h-4 w-4" />
                      </button>

                      <button className="p-2 hover:bg-red-100 rounded">
                        <TrashIcon className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}