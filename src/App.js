import React from "react";
import Cv from "./components/Cv";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>CV App</h1>
        </header>

        <main>
          <Cv />
        </main>

        <footer>
          <p>
            By <a href="https://github.com/roesparc/">roesparc</a>
          </p>
          <a href="https://github.com/roesparc/">
            <i class="fa-brands fa-github"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
