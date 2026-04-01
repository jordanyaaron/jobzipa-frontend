
import { NavLink, useNavigate , useLocation} from "react-router-dom";
import NotificationsAdmin from "./admin/Notifications";

export default function Notifications(){
    const location = useLocation();
    const path = location.pathname;
    const user = getUser();
    
    
    return(
        <>
            {
                path.startsWith("/admin") && user.is_admin
                ? <NotificationsAdmin />
                : path.startsWith("/official") && user.is_official
                ? <h1 className="mt-16 text-[var(--text)]">Officicial Notifications</h1>
                : path.startsWith("/staff") && user.is_staff
                ? <h1 className="mt-16 text-[var(--text)]">Staff Notifications</h1>
                : path.startsWith("/staff") && user.is_superuser
                ? <h1 className="mt-16 text-[var(--text)]">super Notifications</h1>
                : ""
            }
        </>
    )
}