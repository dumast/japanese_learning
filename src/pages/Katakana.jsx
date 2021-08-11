import React from "react";
import { katakanas } from "../utils/kanas";
import { Link } from "react-router-dom";

export default function Katakana() {
  return (
    <div className="Kana">
      <div className="Grid">
        <div className="row">
          {katakanas.y_w.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.r.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.k.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.s.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.t.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.n.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.h.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.m.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.vowels.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {katakanas.en.map((katakana) => (
            <Link to={`/katakana/${katakana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{katakana.character}</p>
                <p>{katakana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
