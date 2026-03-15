import { NavLink, useNavigate } from "react-router-dom";

import {
  BriefcaseIcon,
  HomeIcon,
  BellIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  PowerIcon ,
  XMarkIcon
} from "@heroicons/react/24/outline";
import JobzipaLogo from "../../assets/logos/jobzipa.png";

const StaffSidebar = ({ closeDrawer }) => {

  const navigate = useNavigate();

  const navLinks = [
    { name: "Jobs", icon: BriefcaseIcon, to: "/jobs" },
    { name: "Dashboard", icon: HomeIcon, to: "/super" },
    { name: "Notifications", icon: BellIcon, to: "/notifications" },
    { name: "Bookmarked", icon: BookmarkIcon, to: "/bookmarked" },
    { name: "Settings", icon: Cog6ToothIcon, to: "/settings" },
    { name: "FAQ", icon: QuestionMarkCircleIcon, to: "/faq" },
    { name: "Logout", icon: PowerIcon, action: "logout" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    closeDrawer?.();

    navigate("/");
  };

  return (
    <aside className="h-full p-4">
      <div className="h-16 flex  border-b border-[var(--border)]">
        <XMarkIcon className="h-6 w-6 text-[var(--text)]" />
        <img 
            src={JobzipaLogo} 
            className="
                mt-[4px]
                ml-[25px]
                h-9
            "
            alt="" srcset=""
        />
      </div>
      <nav className="space-y-2">

        {navLinks.map((link) => {

          const Icon = link.icon;

          // Logout Button
          if (link.action === "logout") {
            return (
              <button
                key={link.name}
                onClick={handleLogout}
                className="
                  flex w-full items-center 
                  gap-3 px-3 py-2 rounded-lg 
                  transition hover:bg-[var(--hover)]
                "
              >
                <Icon className="h-5 w-5  text-[var(--text)]" />
                <span className=" text-[var(--text)]">{link.name}</span>
              </button>
            );
          }

          // Normal Links
          return (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={closeDrawer}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition
                ${isActive ? "bg-[var(--hover)] font-medium" : "hover:bg-[var(--hover)]"}`
              }
            >
              <Icon className="h-5 w-5  text-[var(--text)]" />
              <span className=" text-[var(--text)]">{link.name}</span>
            </NavLink>
          );

        })}

      </nav>

    </aside>
  );
};

export default StaffSidebar;