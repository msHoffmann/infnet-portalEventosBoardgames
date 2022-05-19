import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { Container } from "react-bootstrap";
 
export function LayoutPortal ({ children }) {
  const [isSideBarOPen, setIsSideBarOpen] = useState(false)
  return (
    <div className="d-flex flex-grow-1">
            <Sidebar isOpen={isSideBarOPen} onClose={() => setIsSideBarOpen(false) }/>
            <main className="flex-grow-1">
            <Topbar onOpen={() => setIsSideBarOpen(true)}/>
            <Container fluid>
            { children }
            </Container>
            </main>
    </div>
  );
}
