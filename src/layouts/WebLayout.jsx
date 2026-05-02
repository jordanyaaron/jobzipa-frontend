import { Link, Outlet, useLocation } from "react-router-dom";

export default function InfoLayout() {
  const { pathname } = useLocation();

  const links = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--main-bg)] px-4 py-10">

      {/* FIXED NAV */}
      <div className="fixed top-0 left-0 w-full bg-[var(--main-bg)] border-b border-[var(--border)] z-50">
        <div className="max-w-5xl mx-auto flex gap-2 py-3 px-4 overflow-x-auto">
          {links.map((link) => {
            const active = pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition ${
                  active
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-[var(--text)] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* CONTENT (IMPORTANT SPACING) */}
      <div className="max-w-5xl mx-auto w-full flex-1 pt-4">
        <Outlet />
      </div>

      {/* FOOTER */}
      <footer className="mt-10 text-center text-sm text-[var(--placeholder)]">
        © 2026 Jobzipa Inc. All rights reserved.
      </footer>
    </div>
  );
}