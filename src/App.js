
import './App.css';

const bookoptions = [
  { id: 1, title: 'The Courage to Be Disliked', theme: 'non-fiction', isAvailable: true },
  { id: 2, title: 'The Science Behind Karoake Machines', theme: 'non-fiction', isAvailable: true },
  { id: 3, title: 'In Order to Live', theme: 'non-fiction', isAvailable: false },
  { id: 4, title: 'Why I Believe I am a Vampire', theme: 'fiction', isAvailable: false },
  { id: 5, title: 'Almond', theme: 'fiction', isAvailable: true },
];

function BookRack() {
  const listBooks = bookoptions.map(read =>
    <li
      key={read.id}
      style={{
        color: read.isAvailable ? 'green' : 'red'
      }}
    >
      {read.title}
    </li>
    );
    return (
      <ul>{listBooks}</ul>
    )  
}

const book = {
  header: 'MSU Digital Library',
  description: 'Find Books to Read!',
  location: 'East Lansing, MI',
};

function Library() {
  return(
    <div>
      <h2>{book.header} ({book.location})</h2>
      <p>{book.description}</p>  
    </div>
  );
}

function GetStartedButton() {
  return (
    <div>
      <h3>Click here to start checking out books</h3>
      <button>Get Started</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <BookRack />
        <GetStartedButton />
      </header>
    </div>
  );
}

export default App;
