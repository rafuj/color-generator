import React, { useEffect, useState } from "react";
export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);

  const bg = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearInterval(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hexColor}`);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}
