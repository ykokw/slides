import React from "react";

const styleObject = {
  position: "fixed",
  top: 10,
  right: 10,
  padding: "4px",
  border: "1px solid red",
  color: "red",
  fontSize: "2rem",
  borderRadius: "8px",
};

const ConfidentialMark = () => <span style={styleObject}>Confidential</span>;

export default ConfidentialMark;
