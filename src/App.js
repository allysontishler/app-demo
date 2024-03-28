import logo from './logo.svg';
import './App.css';

const book = {
  title: 'A Farwell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farwell.png',
  width: '264',
  height: '378'
};

function MagicButton() {
  return (
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MagicButton />
      </header>
    </div>
  );
}

export default App;
