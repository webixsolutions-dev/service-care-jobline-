import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { GiMapleLeaf } from "react-icons/gi";
import { footerConfig } from "../../data/footerConfigs";
import logoSrc from "../../assets/logo.png";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import styles from "./Footer.module.css";

const socialIcons = {
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { tagline, supportingLine, socials, columns, legal, contactInfo } = footerConfig;

  const phoneHref = `tel:${(contactInfo.phone || "").replace(/[^\d+]/g, "")}`;
  const emailHref = `mailto:${contactInfo.email || ""}`;

  const contactItems = [
    contactInfo.address
      ? { key: "address", icon: MapPin, node: <span>{contactInfo.address}</span> }
      : null,
    contactInfo.email
      ? { key: "email", icon: Mail, node: <a href={emailHref}>{contactInfo.email}</a> }
      : null,
    contactInfo.phone
      ? { key: "phone", icon: Phone, node: <a href={phoneHref}>{contactInfo.phone}</a> }
      : null,
    contactInfo.hours
      ? { key: "hours", icon: Clock, node: <span>{contactInfo.hours}</span> }
      : null,
  ].filter(Boolean);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={logoSrc} alt="ServiceCare Jobline" className={styles.logo} />
          <p>{tagline}</p>
          {supportingLine ? (
            <p className={styles.support}>
              <GiMapleLeaf aria-hidden />
              {supportingLine}
            </p>
          ) : null}
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className={styles.colTitle}>{col.title}</h3>
            <ul className={styles.colLinks}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className={styles.colTitle}>Contact Us</h3>
          <ul className={styles.contact}>
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.key}>
                  <Icon size={18} />
                  {item.node}
                </li>
              );
            })}
          </ul>
          <div className={styles.socials}>
            {socials.map((item) => {
              const Icon = socialIcons[item.name];
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {Icon ? <Icon /> : item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {year} ServiceCare Jobline. All rights reserved.</p>
          <nav className={styles.legal} aria-label="Legal">
            {legal.map((item, i) => (
              <span key={item.label}>
                {i > 0 ? <span className={styles.pipe}>|</span> : null}
                <NavLink to={item.to}>{item.label}</NavLink>
              </span>
            ))}
          </nav>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
