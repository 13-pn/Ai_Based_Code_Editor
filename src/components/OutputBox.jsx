import React, { useEffect, useRef } from "react";

const OutputBox = ({ htmlCode, cssCode, jsCode }) => {
  const iframeRef = useRef();

  useEffect(() => {
    const document = iframeRef.current.contentDocument;
    const documentContents = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}<\/script>
        </body>
      </html>
    `;
    document.open();
    document.write(documentContents);
    document.close();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <iframe
      ref={iframeRef}
      style={{ width: "100%", height: "100%", border: "1px solid #ccc" }}
      title="Output"
    />
  );
};

export default OutputBox;
