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
    ExclamationTriangleIcon
  } from "@heroicons/react/24/outline";
export default function SuperSideBar({ sidebarOpen, setSidebarOpen }) {
    const navLinks = [
        {
          name: "Dashboard",
          path: "/super",
          icon: HomeIcon
        },
        {
          name: "Jobs",
          path: "/super/jobs",
          icon: BriefcaseIcon
        },
        {
          name: "Winning Team",
          path: "/super/staff",
          icon: UsersIcon
        },
        {
          name: "Analytics",
          path: "/super/analytics",
          icon: ChartBarIcon
        },
        {
          name: "Revenue",
          path: "/super/revenue",
          icon: CurrencyDollarIcon
        },
        {
          name: "Notifications",
          path: "/super/notifications",
          icon: BellIcon
        },
        {
          name: "Reports",
          path: "/super/report",
          icon: ExclamationTriangleIcon
        },
        {
          name: "Settings",
          path: "/super/settings",
          icon: Cog6ToothIcon
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
          <div className="h-16 flex  border-b border-[var(--border)]">
          <img 
                src={JobzipaLogo} 
                className="
                    mt-[4px]
                    ml-[25px]
                    h-12
                "
                alt="" srcset=""
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
                    replace
                    className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition
                    ${
                        isActive
                        ? "bg-[var(--primary)] text-white"
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