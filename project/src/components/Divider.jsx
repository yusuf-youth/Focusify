import React from "react";

function Divider({ isShort }) {
  return <hr className={`divider ${isShort ? "divider--short" : ""}`} />;
}

export default Divider;
