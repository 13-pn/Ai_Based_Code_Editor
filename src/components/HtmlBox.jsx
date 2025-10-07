import React from "react";

const HtmlBox = ({ htmlCode, setHtmlCode }) => {
  return (
    <textarea
      value={htmlCode}
      onChange={(e) => setHtmlCode(e.target.value)}
      placeholder="Write HTML here..."
      style={{ width: "100%", height: "100%", resize: "none" }}
    />
  );
};

export default HtmlBox;
