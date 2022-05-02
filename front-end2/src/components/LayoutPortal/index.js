import { Sidebar } from "./Sidebar";
import { Topbar} from "./Topbar";

export function LayoutPortal ({ children }) {
   return (
    <div>
        <Topbar />
        <Sidebar />
        {children}
        </div>
) 
}