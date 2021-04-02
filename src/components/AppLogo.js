//Libraries
import React from "react";

function AppLogo({ src, alt, width, style, className }) {
  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
      width={width}
    />
  );
}

export default AppLogo;
