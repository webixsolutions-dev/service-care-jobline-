import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.shell}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
