import { Link } from "react-router-dom";
import {
  Bars3Icon,
} from "@heroicons/react/24/outline";
import JobzipaLogo from "../../assets/logos/jobzipa.png";


const PostOnDashboardHeader = ({ setSidebarOpen  }) => {

  return (
    <header className="fixed md:hidden top-0 left-0 w-[100vw] z-40 border-b border-[var(--border)] bg-[var(--background)]">

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={JobzipaLogo} alt="Jobzipa" className="h-9" />
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3 relative">
          {/* Sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-[var(--hover)]"
          >
            <Bars3Icon className="h-6 w-6 text-[var(--text)]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default PostOnDashboardHeader;