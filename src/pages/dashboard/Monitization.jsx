import { NavLink, useNavigate , useLocation} from "react-router-dom";
import { getUser, isAuthenticated } from "@/utils/auth";

export default function Monitizations(){
    const location = useLocation();
    const path = location.pathname;
    const user = getUser();
    
    
    return(
        <>
            {
                path.startsWith("/admin") && user.is_admin
                ? <h1 className="mt-16 text-[var(--text)]">Admin Monitizations</h1>
                : path.startsWith("/official") && user.is_official
                ? <h1 className="mt-16 text-[var(--text)]">Officicial Monitizations</h1>
                : path.startsWith("/staff") && user.is_staff
                ? <h1 className="mt-16 text-[var(--text)]">Staff Monitizations</h1>
                : path.startsWith("/staff") && user.is_superuser
                ? <h1 className="mt-16 text-[var(--text)]">super Monitizations</h1>
                : ""
            }
        </>
    )
}