import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import { DashboardDataProvider } from "./context/DashboardDataContext";
import { EmployerDataProvider } from "./context/EmployerDataContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DashboardDataProvider>
          <EmployerDataProvider>
            <ScrollToTop />
            <AppRoutes />
          </EmployerDataProvider>
        </DashboardDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
