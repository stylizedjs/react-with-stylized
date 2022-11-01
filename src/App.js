import logo from './logo.svg';
import './App.css';
import '../node_modules/stylizedjs/dist/components/button/button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <stlzd-button>Click me</stlzd-button>
    </div>
  );
}

export default App;
