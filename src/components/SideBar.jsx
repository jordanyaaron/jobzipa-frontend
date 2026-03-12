import {
  HomeIcon,
  BriefcaseIcon,
  UsersIcon,
  BellIcon,
  BookmarkIcon,
  QuestionMarkCircleIcon,
  UserIcon, Cog6ToothIcon
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function  Sidebar  ( { sidebarOpen, setSidebarOpen } )  {
  const links = [
    { name: "Dashboard", icon: HomeIcon , to: "/super" },
    { name: "Jobs", icon: BriefcaseIcon , to: "/jobs" },
    { name: "Applicants", icon: UsersIcon , to: "/applicants" },
    { name: "Notifications", icon: BellIcon , to: "/notifications" },
    { name: "Bookmarked", icon: BookmarkIcon , to: "/bookmarked" },
    { name: "Settings", icon: Cog6ToothIcon , to: "/settings" },
    { name: "FAQ", icon: QuestionMarkCircleIcon , to: "/faq" },
    { name: "Login", icon: UserIcon , to: "/login" },

  ];

  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 h-screen sticky top-0 pt-16 z-10">
      <nav className="flex mt-[30px] flex-col space-y-2">
        {links.map((link) => {
            const Icon = link.icon;

            return (
            <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md transition-all ${
                    isActive
                    ? "bg-green-100 dark:bg-green-900 text-green-600"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
                }
            >
                <Icon className="w-5 h-5 mr-3" />
                <span>{link.name}</span>
            </NavLink>
            );
        })}
      </nav>
    </aside>
  );
};



