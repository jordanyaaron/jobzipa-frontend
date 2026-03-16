import JobzipaLogo from "../assets/logos/jobzipa.png";
import {Bars3Icon} from '@heroicons/react/24/outline'
export default function DashboardHeader({ setSidebarOpen }) {
    return (
      <header className="md:hidden h-16 flex flex-row  items-left px-4 border-b border-[var(--border)] bg-[var(--background)]">
  
        {/* Logo */}
        {/* <span className="font-bold">JOBZPA</span> */}
        <div 
            className="
                flex-1
                justify-between
                h-16
            "
        >
            <img 
                src={JobzipaLogo} 
                className="
                    h-9
                "
                alt="" srcset=""
             />
        </div>
        <div 
            className="
                w-[80px]
                justify-between
                h-16
            "
        >
          <button
              onClick={setSidebarOpen}
              className="
                lg:hidden p-2 rounded-lg cursor-pointer
                hover:bg-[var(--hover)]  text-[var(--text)] 
              "
            >
              <Bars3Icon className="h-6 w-6  text-[var(--text)]" />
          </button>
        </div>

          
        
  
        {/* Spacer */}
        <div />
  
      </header>
    );
  }