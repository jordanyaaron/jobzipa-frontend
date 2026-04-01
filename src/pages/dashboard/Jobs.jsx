import { NavLink, useNavigate , useLocation , useOutletContext} from "react-router-dom";
import { getUser, isAuthenticated } from "@/utils/auth";
import JobsAdmin from "./admin/Jobs";

export default function JobsInStaff(){
    const { 
        // theme mode 
            darkMode , setDarkMode ,
            setSidebarOpen, 
        // variables
            viewAllPosts,
            filter,
            searchQuery,
        // seters
            setViewAllPosts,
            setFilter,
            setSearchQuery

    } = useOutletContext();
    const location = useLocation();
    const path = location.pathname;
    const user = getUser();
    
    
    return(
        <>
            {
                path.startsWith("/admin") && user.is_admin
                ? <JobsAdmin 
                    // seter
                        setFilter={setFilter} 
                        setViewAllPosts={setViewAllPosts} 
                        setSearchQuery = {setSearchQuery}
                    // variable
                        viewAllPosts={viewAllPosts} 
                        filter={filter}
                        searchQuery = {searchQuery}
                />
                : path.startsWith("/official") && user.is_official
                ? <h1 className="mt-16 text-[var(--text)]">Officicial Jobs</h1>
                : path.startsWith("/staff") && user.is_staff
                ? <h1 className="mt-16 text-[var(--text)]">Staff jobs</h1>
                : ""
            }
        </>
    )
}