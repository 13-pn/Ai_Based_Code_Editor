import React, { useState } from "react";
import HtmlBox from "./components/HtmlBox";
import CssBox from "./components/CssBox";
import JsBox from "./components/JsBox";
import OutputBox from "./components/OutputBox";
import Chatbot from "./components/ChatBot";
import Download from "./components/dowanload";
import "./App.css";

const App = () => {
  const [htmlCode, setHtmlCode] = useState("<h1>Hello Dev.</h1>");
  const [cssCode, setCssCode] = useState("h1 { color: White; }");
  const [jsCode, setJsCode] = useState("console.log('Hello Hacker');");
  const [aiCode, setAiCode] = useState("");

  return (
    <div className="app-container">
      <div className="top-row">
        <div className="editor-box">
          <div className="box-title">HTML</div>
          <HtmlBox htmlCode={htmlCode} setHtmlCode={setHtmlCode} />
        </div>
        <div className="editor-box">
          <div className="box-title">CSS</div>
          <CssBox cssCode={cssCode} setCssCode={setCssCode} />
        </div>
      </div>

        <div className="bottom-row">
        <div className="editor-box">
          <div className="box-title">JavaScript</div>
          <JsBox jsCode={jsCode} setJsCode={setJsCode} />
        </div>
        <div className="editor-box output-box">
          <div className="box-title">Output</div>
          <OutputBox htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Download htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Chatbot setAiCode={setAiCode} />
      </div>
    </div>
  );
};

export default App;
