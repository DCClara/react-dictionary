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
        <footer className="App-footer">Coded by Danielle Casa</footer>
      </div>
    </div>
  );
}
