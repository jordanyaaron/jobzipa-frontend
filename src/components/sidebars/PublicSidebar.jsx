import { NavLink } from "react-router-dom";

import {
  BriefcaseIcon,
  BellIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon ,
  XMarkIcon ,
  HomeIcon ,
  UserCircleIcon ,
  ArrowRightStartOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,

} from "@heroicons/react/24/outline";
import JobzipaLogo from "../../assets/logos/jobzipa.png";


const PublicSidebar = ({ toggleDrawer }) => {

  const navLinks = [
    { name: "Home", icon: HomeIcon, to: "/", replace: true },
    { name: "Notifications", icon: BellIcon, to: "/notifications", replace: true },
    { name: "Bookmarked", icon: BookmarkIcon, to: "/bookmarked", replace: true },
    { name: "Login", icon: UserCircleIcon, to: "/login", replace: false },
    { name: "Settings", icon: Cog6ToothIcon, to: "/settings", replace: true },
    { name: "FAQ", icon: QuestionMarkCircleIcon, to: "/faq", replace: true },
  ];

  return (
    <aside className="h-full p-4 w-64 " >
      <div className="h-13 pl-2 flex items-center pb-[10px] border-b border-[var(--border)]">
        
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

      <nav className="space-y-2 pt-2">

        {navLinks.map((link) => {

          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.to}
              replace={link.replace}
              onClick={toggleDrawer}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 px-3 py-2 rounded-lg transition
                ${
                  isActive
                    ? "bg-[var(--hover)] font-medium"
                    : "hover:bg-[var(--hover)]"
                }`
              }
            >
              <Icon className="h-5 w-5 text-[var(--text)]" />
              <span className="text-[var(--text)]">{link.name}</span>
            </NavLink>
          );

        })}

      </nav>

    </aside>
  );
};

export default PublicSidebar;