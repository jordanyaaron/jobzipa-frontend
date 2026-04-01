import { NavLink, useNavigate , useLocation} from "react-router-dom";
import JobsAdmin from "./admin/Jobs";

export default function JobsInStaff(){
    const location = useLocation();
    const path = location.pathname;
    const user = getUser();
    
    
    return(
        <>
            {
                path.startsWith("/admin") && user.is_admin
                ? <JobsAdmin/>
                : path.startsWith("/official") && user.is_official
                ? <h1 className="mt-16 text-[var(--text)]">Officicial Jobs</h1>
                : path.startsWith("/staff") && user.is_staff
                ? <h1 className="mt-16 text-[var(--text)]">Staff jobs</h1>
                : ""
            }
        </>
    )
}