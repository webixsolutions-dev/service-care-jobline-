import { GiMapleLeaf } from "react-icons/gi";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

const colorClass = {
  white: styles.white,
  gold: styles.gold,
  teal: styles.teal,
};

function backgroundSrc(src) {
  if (!src) return src;
  return src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
}

export default function Hero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  headingWhite,
  headingAccent,
  headingParts,
  headingLeaf = false,
  accentLine = false,
  accentLinePosition = "below",
  subtext,
  subtextAccent,
  primaryCta,
  secondaryCta,
  note,
  noteIcon: NoteIcon,
  backgroundImage,
  imageAlt = "",
  backgroundFit = "cover",
  decor,
}) {
  const bg = backgroundSrc(backgroundImage);

  const bgClass =
    backgroundFit === "rightHalf"
      ? styles.bgRightHalf
      : backgroundFit === "contain"
        ? styles.bgContain
        : "";

  const headingContent = headingParts?.length ? (
    headingParts.map((part, i) => (
      <span
        key={`${part.text}-${i}`}
        className={`${colorClass[part.color] || styles.white} ${part.block ? styles.block : ""}`}
      >
        {part.text}
        {part.leaf ? <GiMapleLeaf className={styles.leaf} aria-hidden /> : null}
      </span>
    ))
  ) : (
    <>
      <span className={styles.white}>{headingWhite}</span>
      {headingAccent ? (
        <>
          {" "}
          <span className={styles.gold}>{headingAccent}</span>
        </>
      ) : null}
      {headingLeaf ? <GiMapleLeaf className={styles.leaf} aria-hidden /> : null}
    </>
  );

  const bar = accentLine ? (
    <span
      className={`${styles.bar} ${accentLine === "gold" ? styles.barGold : styles.barTeal}`}
      aria-hidden
    />
  ) : null;

  return (
    <section
      className={`${styles.hero} ${backgroundFit === "rightHalf" ? styles.heroRightHalf : ""} ${
        decor === "goldRings" ? styles.heroGoldRings : ""
      } ${decor === "maple" ? styles.heroMaple : ""} ${
        decor === "integrated" ? styles.heroIntegrated : ""
      } ${decor === "postJob" ? styles.heroPostJob : ""}`}
      aria-labelledby="page-hero-heading"
    >
      <div
        className={`${styles.bg} ${bgClass}`}
        style={bg ? { backgroundImage: `url(${bg})` } : undefined}
        role={imageAlt ? "img" : undefined}
        aria-label={imageAlt || undefined}
        aria-hidden={imageAlt ? undefined : true}
      />
      {decor === "goldRings" ? (
        <>
          <span className={styles.ringOuter} aria-hidden />
          <span className={styles.ringInner} aria-hidden />
        </>
      ) : null}
      {decor === "maple" ? (
        <>
          <GiMapleLeaf className={styles.mapleLeaf} aria-hidden />
          <span className={styles.skyline} aria-hidden />
        </>
      ) : null}
      <div className={styles.overlay} aria-hidden />

      <div className={styles.content}>
        {eyebrow ? (
          <span className={styles.eyebrow}>
            {EyebrowIcon ? <EyebrowIcon size={15} strokeWidth={2.2} aria-hidden /> : null}
            {eyebrow}
          </span>
        ) : null}

        {accentLine && accentLinePosition === "above" ? bar : null}

        <h1 id="page-hero-heading">{headingContent}</h1>

        {accentLine && accentLinePosition !== "above" ? bar : null}

        {subtext ? (
          <p className={styles.subtext}>
            {subtext}
            {subtextAccent ? (
              <>
                {" "}
                <span className={styles.subtextAccent}>{subtextAccent}</span>
              </>
            ) : null}
          </p>
        ) : null}

        {primaryCta || secondaryCta ? (
          <div className={styles.ctas}>
            {primaryCta ? (
              <Button
                to={primaryCta.to}
                href={primaryCta.href}
                onClick={primaryCta.onClick}
                variant={primaryCta.variant || "solid-teal"}
                icon={primaryCta.icon}
              >
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button
                to={secondaryCta.to}
                href={secondaryCta.href}
                onClick={secondaryCta.onClick}
                variant={secondaryCta.variant || "solid-gold"}
                icon={secondaryCta.icon}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}

        {note ? (
          <p className={styles.note}>
            {NoteIcon ? <NoteIcon size={16} strokeWidth={2.4} aria-hidden /> : null}
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
