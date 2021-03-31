//Libraries
import React from "react";

function AppLogo({ src, alt, width = "100%", style }) {
  return <img style={style} src={src} alt={alt} width={width} />;
}

export default AppLogo;
