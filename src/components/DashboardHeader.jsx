import JobzipaLogo from "../assets/logos/jobzipa.png";
import {Bars3Icon} from '@heroicons/react/24/outline'
export default function DashboardHeader({ setSidebarOpen }) {
    return (
      <header className="md:hidden h-16 flex flex-row  items-left px-4 border-b border-[var(--border)] bg-[var(--background)]">
  
        
  
        {/* Logo */}
        {/* <span className="font-bold">JOBZPA</span> */}
        <div 
            className="
                w-[calc(100vw-80px)]
                h-16
            "
        >
            <img 
                src={JobzipaLogo} 
                className="
                    mt-[3px]
                    h-9
                "
                alt="" srcset=""
             />
        </div>

        {/* Sidebar button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-xl cursor-pointer"
        >
          <Bars3Icon className="h-7 w-7 text-[var(--text)]"/>
        </button>
        
  
        {/* Spacer */}
        <div />
  
      </header>
    );
  }