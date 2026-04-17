import { Link, Outlet, useLocation } from "react-router-dom";

export default function InfoLayout() {
  const { pathname } = useLocation();

  const links = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--main-bg)] px-4 py-10">

      <div className="max-w-5xl mx-auto w-full flex-1">

        {/* NAVIGATION */}
        <div className="flex gap-2 mb-6 border-b border-[var(--border)] pb-2">
          {links.map((link) => {
            const active = pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm transition ${
                  active
                    ? "bg-black text-white"
                    : "text-[var(--text)] hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CONTENT */}
        <Outlet />
      </div>

      {/* FOOTER */}
      <footer className="mt-10 text-center text-sm text-[var(--placeholder)]">
        © 2026 Jobzipa Inc. All rights reserved.
      </footer>
    </div>
  );
}