import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  
  // Define paths where Navbar and Footer should be hidden
  const hideNavbarAndFooter = [
    '/sign-in',
    '/signup',
    '/dashboard',
    '/recruiter',
   
  ];
  
  // Check if current path matches any of the hide paths
  const shouldHide = hideNavbarAndFooter.some(path => 
    location.pathname === path || location.pathname.startsWith(path + '/')
  );

  return (
    <div className="flex min-h-screen flex-col">
      {!shouldHide && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!shouldHide && <Footer />}
    </div>
  );
}