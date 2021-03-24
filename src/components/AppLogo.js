//Libraries
import React from "react";

function AppLogo({ src, alt, width = 350 }) {
  return <img src={src} alt={alt} width={width} />;
}

export default AppLogo;
