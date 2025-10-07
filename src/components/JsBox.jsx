import React from "react";

const JsBox = ({ jsCode, setJsCode }) => {
  return (
    <textarea
      value={jsCode}
      onChange={(e) => setJsCode(e.target.value)}
      placeholder="Write JS here..."
      style={{ width: "100%", height: "100%", resize: "none" }}
    />
  );
};

export default JsBox;
