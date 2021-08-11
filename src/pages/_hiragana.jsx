import React from "react";
import { useState, useEffect } from "react";
import { hiraganas } from "../utils/kanas";

export default function _hiragana({ match }) {
  const [hiragana, setHiragana] = useState({});
  useEffect(() => {
    // if (match.params.id === "en") return setHiragana("EN");
    // setHiragana(hiraganas[]);
    for (let key in hiraganas) {
      const tmpHiragana = hiraganas[key].find(
        (x) => x.translation === match.params.id.toUpperCase()
      );
      if (tmpHiragana) {
        setHiragana(tmpHiragana);
        continue;
      }
    }
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{hiragana.character}</h1>
        <h2>{hiragana.translation}</h2>
      </div>
    </div>
  );
}
