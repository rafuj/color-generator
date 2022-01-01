import React, { useState } from "react";
export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);

  const bg = rgb.join(",");

  const handleCopy = (e) => {
    navigator.clipboard.writeText(`#${hexColor}`);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bg})` }}
      onClick={handleCopy}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}
