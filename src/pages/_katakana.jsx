import React from "react";
import { useState, useEffect } from "react";
import { katakanas } from "../utils/kanas";

export default function _katakana({ match }) {
  const [katakana, setKatakana] = useState({});
  useEffect(() => {
    for (let key in katakanas) {
      const tmpKatakana = katakanas[key].find(
        (x) => x.translation === match.params.id.toUpperCase()
      );
      if (tmpKatakana) {
        setKatakana(tmpKatakana);
        continue;
      }
    }
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{katakana.character}</h1>
        <h2>{katakana.translation}</h2>
      </div>
    </div>
  );
}
