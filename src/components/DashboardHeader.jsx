import JobzipaLogo from "../assets/logos/jobzipa.png";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function DashboardHeader({ setSidebarOpen }) {
  return (
    <header className="md:hidden h-16 flex items-center justify-between px-4 border-b border-[var(--border)] bg-[var(--background)]">

      {/* Logo */}
      <img
        src={JobzipaLogo}
        className="h-9"
        alt="Jobzipa"
      />

      {/* Menu Button */}
      <button
        onClick={setSidebarOpen}
        className="p-2 rounded-lg cursor-pointer hover:bg-[var(--hover)]"
      >
        <Bars3Icon className="h-6 w-6 text-[var(--text)]" />
      </button>

    </header>
  );
}