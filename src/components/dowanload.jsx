import React from "react";
import dldIcon from "../assets/dld.svg"; 

const Download = ({ htmlCode, cssCode, jsCode }) => {
  const downloadFile = (filename, content) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadAll = () => {
    downloadFile("index.html", htmlCode);
    downloadFile("style.css", cssCode);
    downloadFile("script.js", jsCode);
  };

  return (
    <button
      onClick={handleDownloadAll}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        backgroundColor: "#007acc",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      title="Download Code"
    >
      <img
        src={dldIcon}
        alt="Download"
        style={{ width: "24px", height: "24px" }}
      />
    </button>
  );
};

export default Download;
