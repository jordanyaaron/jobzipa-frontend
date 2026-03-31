import {NavLink , useLocation} from 'react-router-dom' 
import JobzipaLogo from "@/assets/logos/jobzipa.png"
import {
    HomeIcon,
    BriefcaseIcon,
    UsersIcon,
    ChartBarIcon,
    CurrencyDollarIcon,
    BellIcon,
    Cog6ToothIcon,
    BanknotesIcon,
    XMarkIcon ,
    ExclamationTriangleIcon,
    Squares2X2Icon
  } from "@heroicons/react/24/outline";

export default function StaffDashboardSidebar({ toggleDrawer , sidebarOpen, setSidebarOpen }) {
    const links = useNavLinks();
    const navAdminLinks = [
        {
          name: "Overview",
          path: "/admin",
          icon: Squares2X2Icon,
          replace : true
        },
        {
          name: "Jobs",
          path: "/admin/jobs",
          icon: BriefcaseIcon,
          replace : true
        },
        {
          name: "Winning Team",
          path: "/admin/staff",
          icon: UsersIcon,
          replace : true
        },
        {
          name: "Analytics",
          path: "/admin/analytics",
          icon: ChartBarIcon,
          replace : true
        },
        {
          name: "Revenue",
          path: "/admin/revenue",
          icon: CurrencyDollarIcon,
          replace : true
        },
        {
          name: "Payouts",
          path: "/admin/Payouts",
          icon: BanknotesIcon,
          replace : true
        },
        {
          name: "Notifications",
          path: "/admin/notifications",
          icon: BellIcon,
          replace : true
        },
        {
          name: "Reports",
          path: "/admin/report",
          icon: ExclamationTriangleIcon,
          replace : true
        },
        {
          name: "Settings",
          path: "/admin/settings",
          icon: Cog6ToothIcon ,
          replace : true
        }
    ];

    const navOfficialLinks = [
        {
          name: "Overview",
          path: "/official",
          icon: Squares2X2Icon,
          replace : true
        },
        {
          name: "Jobs",
          path: "/official/jobs",
          icon: BriefcaseIcon,
          replace : true
        },
        {
          name: "Winning Team",
          path: "/official/staff",
          icon: UsersIcon,
          replace : true
        },
        {
          name: "Analytics",
          path: "/official/analytics",
          icon: ChartBarIcon,
          replace : true
        },
        {
          name: "Revenue",
          path: "/official/revenue",
          icon: CurrencyDollarIcon,
          replace : true
        },
        {
          name: "Payouts",
          path: "/official/Payouts",
          icon: BanknotesIcon,
          replace : true
        },
        {
          name: "Notifications",
          path: "/official/notifications",
          icon: BellIcon,
          replace : true
        },
        {
          name: "Reports",
          path: "/official/report",
          icon: ExclamationTriangleIcon,
          replace : true
        },
        {
          name: "Settings",
          path: "/official/settings",
          icon: Cog6ToothIcon ,
          replace : true
        }
    ];

    const navNonOfficialLinks = [
        {
          name: "Overviews",
          path: "/staff",
          icon: Squares2X2Icon,
          replace : true
        },
        {
          name: "Jobs",
          path: "/staff/jobs",
          icon: BriefcaseIcon,
          replace : true
        },
        {
          name: "Winning Team",
          path: "/staff/staff",
          icon: UsersIcon,
          replace : true
        },
        {
          name: "Analytics",
          path: "/staff/analytics",
          icon: ChartBarIcon,
          replace : true
        },
        {
          name: "Revenue",
          path: "/staff/revenue",
          icon: CurrencyDollarIcon,
          replace : true
        },
        {
          name: "Payouts",
          path: "/staff/Payouts",
          icon: BanknotesIcon,
          replace : true
        },
        {
          name: "Notifications",
          path: "/staff/notifications",
          icon: BellIcon,
          replace : true
        },
        {
          name: "Reports",
          path: "/staff/report",
          icon: ExclamationTriangleIcon,
          replace : true
        },
        {
          name: "Settings",
          path: "/staff/settings",
          icon: Cog6ToothIcon ,
          replace : true
        }
    ];
    
    function useNavLinks() {
        const location = useLocation();
        const path = location.pathname;
        if (path.startsWith("/admin")) {
            return navAdminLinks;
        } else if (path.startsWith("/official")) {
            return navOfficialLinks;
        } else if(path.startsWith("/staff")) {
            return navNonOfficialLinks;
        }

    }

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
                    className="p-2 lg:hidden rounded-lg bg-[var(--hover)]  hover:bg-[var(--hover)]"
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

            
            {
                links.map((link) => {

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