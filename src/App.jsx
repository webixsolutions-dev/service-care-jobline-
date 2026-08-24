import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AuthProvider } from "./lib/auth/AuthContext";
import { SavedJobsProvider } from "./lib/SavedJobsContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SavedJobsProvider>
          <ScrollToTop />
          <AppRoutes />
        </SavedJobsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
