import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Briefcase, User, Menu, X } from "lucide-react";
import { navLinks, paths } from "../../data/navLinks";
import LogoMark, { Wordmark } from "../Logo/Logo";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuLinks = navLinks.filter((link) => link.to !== paths.postAJob);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Primary">
        <Link to={paths.home} className={styles.logo} onClick={() => setOpen(false)}>
          <LogoMark size={42} />
          <Wordmark />
        </Link>

        <ul className={styles.links}>
          {menuLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={Boolean(link.end)}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button to={paths.postAJob} variant="solid-gold" icon={Briefcase}>
            Post a Job
          </Button>
          <Button to={paths.signIn} variant="outline-gold" icon={User} className={styles.signIn}>
            Sign In
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open ? (
        <div className={styles.mobile}>
          <ul>
            {menuLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={Boolean(link.end)}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${styles.mobileLink} ${isActive ? styles.mobileActive : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <Button to={paths.postAJob} variant="solid-gold" icon={Briefcase}>
              Post a Job
            </Button>
            <Button to={paths.signIn} variant="outline-gold" icon={User} className={styles.signIn}>
              Sign In
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
