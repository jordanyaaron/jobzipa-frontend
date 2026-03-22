import {NavLink} from 'react-router-dom' 
import JobzipaLogo from "../assets/logos/jobzipa.png";
import {
    HomeIcon,
    BriefcaseIcon,
    UsersIcon,
    ChartBarIcon,
    CurrencyDollarIcon,
    BellIcon,
    Cog6ToothIcon,
    XMarkIcon ,
    ExclamationTriangleIcon
  } from "@heroicons/react/24/outline";
export default function SuperSideBar({ toggleDrawer , sidebarOpen, setSidebarOpen }) {
    const navLinks = [
        {
          name: "Dashboard",
          path: "/super",
          icon: HomeIcon,
          replace : true
        },
        {
          name: "Jobs",
          path: "/super/jobs",
          icon: BriefcaseIcon,
          replace : true
        },
        {
          name: "Winning Team",
          path: "/super/staff",
          icon: UsersIcon,
          replace : true
        },
        {
          name: "Analytics",
          path: "/super/analytics",
          icon: ChartBarIcon,
          replace : true
        },
        {
          name: "Revenue",
          path: "/super/revenue",
          icon: CurrencyDollarIcon,
          replace : true
        },
        {
          name: "Notifications",
          path: "/super/notifications",
          icon: BellIcon,
          replace : true
        },
        {
          name: "Reports",
          path: "/super/report",
          icon: ExclamationTriangleIcon,
          replace : true
        },
        {
          name: "Settings",
          path: "/super/settings",
          icon: Cog6ToothIcon ,
          replace : true
        }
      ];
    return (
      <>
        {/* Overlay (mobile) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
  
        <aside
          className={`fixed md:static z-50 top-0 left-0 h-full w-64 
          bg-[var(--sidebar-bg)] border-r border-[var(--border)]
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 transition-transform duration-300`}
        >
  
          {/* Top Section (Logo) */}
          <div 
            className="
              h-16  flex items-center  
              gap-1 px-3
              border-b border-[var(--border)]
            "
          >
            {sidebarOpen && (
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
            )}

            <img
              src={JobzipaLogo}
              className="ml-[10px] h-9"
              alt="Jobzipa logo"
            />
          </div>
  
          {/* Navigation */}
          <nav className="p-4 space-y-2">
  
            {navLinks.map((link) => {

                const Icon = link.icon;

                return (
                  <NavLink
                      key={link.path}
                      to={link.path}
                      replace={link.replace}
                      onClick={toggleDrawer}
                      className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg transition
                        ${
                            isActive
                            ? "bg-[var(--hover)]  text-[var(--text)]"
                            : "hover:bg-[var(--hover)]"
                        }`
                      }
                  >

                      <Icon className="w-5 h-5" />

                      <span>{link.name}</span>

                  </NavLink>
                );

                })}
  
          </nav>
  
        </aside>
      </>
    );
  }