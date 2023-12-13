import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    //let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=book&key=d494296b1e5a34o4t344f5460f276a60`;

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="DictionaryForm" onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>

      <Results results={results} />
    </div>
  );
}