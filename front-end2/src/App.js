import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { LoginView } from "./views/Login";
import { EventsView } from "./views/Events";
import { EventsDetailView } from "../src/views/EventsDetail";
import { DashboardView } from "./views/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminEventsView } from "./views/AdminEvents";
import { AdminAddEventView } from "./views/AdminAddEvent"
import { AdminEditEventView } from "./views/AdminEditEvents"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<NotFoundView />} />
      <Route path="eventos/:id" element={<EventsDetailView />} />
      <Route path="eventos" element={<EventsView />} />
      <Route path='/portal' element={<DashboardView />} />
      <Route path='/portal/login' element={<LoginView />} />
      <Route
        path="/portal/eventos"
        element={
          <PrivateRoute userTypes={[1]}>
            <AdminEventsView />
          </PrivateRoute>
        }
      />
       <Route
        path="/portal/eventos/cadastro"
        element={
          <PrivateRoute userTypes={[1]}>
            <AdminAddEventView />
          </PrivateRoute>
        }
      />
       <Route
        path="/portal/eventos/:id"
        element={
          <PrivateRoute userTypes={[1]}>
            <AdminEditEventView />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export default App;
