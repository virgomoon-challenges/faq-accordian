import './App.css';
import deskTopHeader from './assets/background-pattern-desktop.svg';
import { ReactComponent as Star } from './assets/icon-star.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={deskTopHeader} alt="" />
        <a>
          Learn React
        </a>
        <Star />
      </header>
    </div>
  );
}

export default App;
