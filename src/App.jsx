import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollOnTop from "./components/common/ScrollOnTop"; // Import ScrollOnTop

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <AppRoutes />
        {/* Scroll to Top Button - Global for all pages */}
        <ScrollOnTop />
      </div>
    </BrowserRouter>
  );
}