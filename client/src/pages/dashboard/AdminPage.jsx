import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Navbar from "../../components/header/Navbar";
import DashboardSummary from "./DashboardSummary";

function AdminPage() {
  const location = useLocation();

  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <section className="overflow-y-hidden flex">
      <div className="w-[20%] h-full">
        <Sidebar />
      </div>
      <div className="w-[80%] h-full border-2 z-50">
        <Navbar />
        <div className="p-4">
          {isDashboardRoute && <DashboardSummary />}
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
