import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { Login } from "./views/Login";
import { EventsView } from "./views/Events";
import { EventsDetailView } from "../src/views/EventsDetail";
import { DashboardView } from "./views/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<NotFoundView />} />
      <Route path="/login" element={<Login />} />
      <Route path="eventos/:id" element={<EventsDetailView />} />
      <Route path="eventos" element={<EventsView />} />
      <Route patth='/portal' element={<DashboardView />}/>
    </Routes>
  );
}
export default App;
