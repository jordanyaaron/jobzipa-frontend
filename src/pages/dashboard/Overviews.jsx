import { NavLink, useNavigate , useLocation} from "react-router-dom";
import { getUser, isAuthenticated } from "@/utils/auth";
import OverviewsAdmin from "./admin/Overviews";

export default function Overviews(){
    const location = useLocation();
    const path = location.pathname;
    const user = getUser();
    
    
    return(
        <>
            {
                path.startsWith("/admin") && user.is_admin
                ? <OverviewsAdmin/>
                : path.startsWith("/official") && user.is_official
                ? <h1 className="mt-16 text-[var(--text)]">Officicial Overview</h1>
                : path.startsWith("/staff") && user.is_staff
                ? <h1 className="mt-16 text-[var(--text)]">Staff Overview</h1>
                : ""
            }
        </>
    )
}