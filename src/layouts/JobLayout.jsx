import { Outlet , Link} from "react-router-dom";
import React, { useState}  from "react";
import JobzipaLogo from "@/assets/logos/jobzipa.png";

export default function JobLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[var(--main-bg)]">

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-40 border-b border-[var(--border)]  bg-[var(--header-bg)]">
            <div
                className="flex items-center justify-between px-4 md:px-6 h-16 transition-all duration-200 "
            >
                {/* Left */}
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center">
                        <img src={JobzipaLogo} alt="Jobzipa" className="h-9 md:h-10" />
                    </Link>
                </div>
            </div>
        </header>

        {/* Pages */}
        <main className="pt-16 bg-[var(--main-bg)] px-4 md:px-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}