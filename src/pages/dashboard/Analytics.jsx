
import { NavLink, useNavigate , useLocation} from "react-router-dom";
import AnalyticsAdmin from "./admin/Analytics";

export default function Analytics(){
    const location = useLocation();
    const path = location.pathname;
    const user = getUser();
    
    
    return(
        <>
            {
                path.startsWith("/admin") && user.is_admin
                ? <AnalyticsAdmin/>
                : path.startsWith("/official") && user.is_official
                ? <h1 className="mt-16 text-[var(--text)]">Officicial Analytics</h1>
                : path.startsWith("/staff") && user.is_staff
                ? <h1 className="mt-16 text-[var(--text)]">Staff Analytics</h1>
                : ""
            }
        </>
    )
}