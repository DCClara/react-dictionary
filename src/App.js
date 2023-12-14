import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="mountain" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://dcasacodez.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Danielle Casa
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/DCClara/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {""} and hosted on {""}
          <a
            href="https://react-dictionary-app-dc.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
