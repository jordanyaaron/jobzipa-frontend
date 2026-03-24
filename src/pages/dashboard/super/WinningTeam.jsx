import { Link , useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  EyeIcon,PlusIcon,
  PencilSquareIcon,
  TrashIcon, UserPlusIcon
} from "@heroicons/react/24/outline";

export default function WinningTeam() {
  const { staffFilter, setStaffFilter, searchQuery, setSearchQuery } = useOutletContext();
  

  const staffs = [
    // SUPER ADMIN
    {
      id: uuidv4(),
      username: "super.admin",
      first_name: "Super",
      last_name: "Admin",
      role: "ADMIN",
      status: "super",
      jobs: 500,
      is_active: true,
      is_staff: true,
      is_admin: true,
      is_super_admin: true,
      date_joined: "2017-01-01T09:00:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    // Normal ADMIN
    {
      id: uuidv4(),
      username: "admin.john",
      first_name: "John",
      last_name: "Doe",
      role: "ADMIN",
      status: "admin",
      jobs: 410,
      is_active: true,
      is_staff: true,
      is_admin: true,
      is_super_admin: false,
      date_joined: "2018-03-15T10:20:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    // OFFICIAL STAFF
    {
      id: uuidv4(),
      username: "jane.smith",
      first_name: "Jane",
      last_name: "Smith",
      role: "STAFF",
      status: "Official",
      jobs: 200,
      is_active: true,
      is_staff: true,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2021-08-20T14:30:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    {
      id: uuidv4(),
      username: "emily.davis",
      first_name: "Emily",
      last_name: "Davis",
      role: "STAFF",
      status: "Official",
      jobs: 105,
      is_active: true,
      is_staff: true,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2020-12-01T08:45:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    {
      id: uuidv4(),
      username: "olivia.wilson",
      first_name: "Olivia",
      last_name: "Wilson",
      role: "RECRUITER",
      status: "Official",
      jobs: 220,
      is_active: true,
      is_staff: true,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2022-03-05T13:00:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    // UNOFFICIAL STAFF
    {
      id: uuidv4(),
      username: "sophia.martinez",
      first_name: "Sophia",
      last_name: "Martinez",
      role: "RECRUITER",
      status: "Unofficial",
      jobs: 20,
      is_active: false,
      is_staff: true,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2021-11-11T09:30:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    {
      id: uuidv4(),
      username: "michael.johnson",
      first_name: "Michael",
      last_name: "Johnson",
      role: "STAFF",
      status: "Unofficial",
      jobs: 28,
      is_active: true,
      is_staff: true,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2023-02-10T11:00:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    // UNOFFICIAL USERS
    {
      id: uuidv4(),
      username: "william.brown",
      first_name: "William",
      last_name: "Brown",
      role: "USER",
      status: "Unofficial",
      jobs: 20,
      is_active: false,
      is_staff: false,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2019-07-15T10:20:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    {
      id: uuidv4(),
      username: "james.taylor",
      first_name: "James",
      last_name: "Taylor",
      role: "USER",
      status: "Unofficial",
      jobs: 9,
      is_active: false,
      is_staff: false,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2018-09-21T15:10:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  
    {
      id: uuidv4(),
      username: "isabella.thomas",
      first_name: "Isabella",
      last_name: "Thomas",
      role: "USER",
      status: "Unofficial",
      jobs: 23,
      is_active: true,
      is_staff: false,
      is_admin: false,
      is_super_admin: false,
      date_joined: "2022-08-18T12:00:00Z",
      get full_name() { return `${this.first_name} ${this.last_name}`; }
    },
  ];

  const filteredStaffs = staffs.filter((staff) => {
    const matchesFilter =
    staffFilter === "all" || staff.status === staffFilter;
  
    const matchesSearch =
      (staff.username?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
      (staff.first_name?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
      (staff.last_name?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "") ||
      (staff.staff?.toLowerCase() || "").includes(searchQuery?.toLowerCase() || "");
  
    return matchesFilter && matchesSearch;
  });
  return (
    <div className="p-4 w-[calc(100vw)] lg:w-[calc(100vw-240px)] space-y-4 overflow-x-hidden">
  
      <div className="hidden lg:flex lg:flex-row md:items-center md:justify-between gap-3 min-w-0">
        <h1 className="text-lg md:text-2xl font-bold">The Winning Team</h1>

        <div className="flex gap-2 w-full md:w-auto min-w-0">
          {/* post */}
          <Link
            to="/super/post"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
          >
            <UserPlusIcon className="h-5 w-5" />
            <span className="hidden sm:block">Invite</span>
          </Link>

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
            value={staffFilter}
            onChange={(e) => setStaffFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm"
          >
            <option value="all">All</option>
            <option value="Super">Super</option>
            <option value="Admin">Admin</option>
            <option value="Official">Official</option>
            <option value="Unofficial">Unofficial</option>
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
                <th className="p-3">Jobs</th>
                <th className="p-3">Date Joined</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStaffs.map((staff) => (
                <tr
                  key={staff.id}
                  className="border-t border-[var(--border)] hover:bg-[var(--hover)]"
                >
                  <td className="p-3 whitespace-nowrap">{staff.full_name}</td>
                  <td className="p-3 whitespace-nowrap">{staff.username}</td>

                  {/* Status */}
                  <td className="p-3">
                    <span
                      className={`
                        px-2 py-1 rounded-full text-xs whitespace-nowrap
                        ${
                          staff.status === "Unofficial"
                            ? "bg-red-100 text-red-600text-green-600"
                            : "bg-green-100 text-green-600"
                        }
                      `}
                    >
                      {staff.status}
                    </span>
                  </td>

                  <td className="p-3 whitespace-nowrap">{staff.jobs}</td>
                  <td className="p-3 whitespace-nowrap">{staff.date_joined}</td>

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