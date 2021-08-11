import React from "react";
import { hiraganas } from "../utils/kanas";
import { Link } from "react-router-dom";

export default function Hiragana() {
  return (
    <div className="Kana">
      <div className="Grid">
        <div className="row">
          {hiraganas.y_w.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.r.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.k.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.s.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.t.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.n.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.h.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.m.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.vowels.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="row">
          {hiraganas.en.map((hiragana) => (
            <Link to={`/hiragana/${hiragana.translation.toLowerCase()}`}>
              <div className="kana_box">
                <p>{hiragana.character}</p>
                <p>{hiragana.translation}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
