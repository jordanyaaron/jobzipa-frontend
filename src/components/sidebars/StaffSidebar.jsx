import { NavLink, useNavigate } from "react-router-dom";

import {
  BriefcaseIcon,
  HomeIcon,
  BellIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  PowerIcon ,
  XMarkIcon ,
  Squares2X2Icon,
  ArrowRightStartOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import JobzipaLogo from "../../assets/logos/jobzipa.png";

const StaffSidebar = ({ toggleDrawer }) => {

  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", icon: HomeIcon, to: "/" },
    { name: "Dashboard", icon: Squares2X2Icon, to: "/super" },
    { name: "Notifications", icon: BellIcon, to: "/notifications" },
    { name: "Bookmarked", icon: BookmarkIcon, to: "/bookmarked" },
    { name: "Settings", icon: Cog6ToothIcon, to: "/settings" },
    { name: "FAQ", icon: QuestionMarkCircleIcon, to: "/faq" },
    { name: "Logout", icon: ArrowLeftStartOnRectangleIcon, action: "logout" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    toggleDrawer();

    navigate("/");
  };

  return (
    <aside className="h-full p-4">
      <div className="h-12 pl-2 flex items-center pb-[10px] border-b border-[var(--border)]">
        <button
          onClick={toggleDrawer}
              className="p-2 rounded-lg bg-[var(--hover)]  hover:bg-[var(--hover)]"
          >
          <XMarkIcon 
              className="
                h-6 w-6  text-[var(--text)]
              " 
          />
        </button>

        <img
          src={JobzipaLogo}
          className="ml-[10px] h-9"
          alt="Jobzipa logo"
        />
      </div>
      <nav className="space-y-2  pt-2">

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
              onClick={toggleDrawer}
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