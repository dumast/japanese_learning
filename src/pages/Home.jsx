import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <h1>Japanese Learning App</h1>
      <div className="boxes">
        <Link to="/hiragana">
          <div className="box" style={{backgroundColor: "rgb(255, 115, 0)"}}>Hiragana</div>
        </Link>
        <Link to="/katakana">
          <div className="box" style={{backgroundColor: "rgb(221, 43, 153)"}}>Katakana</div>
        </Link>
      </div>
    </div>
  );
}
