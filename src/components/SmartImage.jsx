import { useState } from "react";

const EXTS = [".png", ".jpg", ".jpeg", ".webp"];

function withExt(src, ext) {
  return src.replace(/\.(png|jpg|jpeg|webp)$/i, ext);
}

/** Tries common image extensions so public/img1.png or img1.jpg both work. */
export default function SmartImage({ src, alt = "", className, ...rest }) {
  const [extIndex, setExtIndex] = useState(0);
  const current = withExt(src, EXTS[extIndex] || ".png");

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (extIndex < EXTS.length - 1) setExtIndex((i) => i + 1);
      }}
      {...rest}
    />
  );
}
