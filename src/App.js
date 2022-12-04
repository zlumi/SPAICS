import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            SPAICS 2022-2023
        </h1>
        <p>
            Teams: Project AAER & SPAICS Inertia<br /><br />
            Built with-
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                ReactJS
            </a>
        </p>
      </header>
    </div>
  );
}

export default App;