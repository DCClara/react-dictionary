import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <audio controls src={props.phonetic.audio}>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">/</a>
      </audio>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
