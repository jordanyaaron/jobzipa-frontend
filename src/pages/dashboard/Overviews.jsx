import { useLocation } from "react-router-dom"
export default function Overviews(){
    
    const title = useTitle()
    function useTitle() {
        const location = useLocation();
        const path = location.pathname;

        let myTitle = null;

        if (path.startsWith("/admin")) {
            myTitle = 'Admin Overview';
        } else if (path.startsWith("/official")) {
            myTitle = 'Official Overview';
        } else if (path.startsWith("/staff")) {
            myTitle = 'Staff Overview';
        }

        return myTitle;
    }
    return(
        <>
            <h1 className="text-2xl text-[var(--text)]">{title}</h1>
        </>
    )
}