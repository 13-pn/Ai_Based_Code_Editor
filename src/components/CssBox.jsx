import React from "react";

const CssBox = ({ cssCode, setCssCode }) => {
  return (
    <textarea
      value={cssCode}
      onChange={(e) => setCssCode(e.target.value)}
      placeholder="Write CSS here..."
      style={{ width: "100%", height: "100%", resize: "none" }}
    />
  );
};

export default CssBox;
