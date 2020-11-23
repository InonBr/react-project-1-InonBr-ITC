import './App.css';
import From from './components/app/Form';
import NoteCards from './components/app/NoteCards';

function App() {
  return (
    <div className='App'>
      <h1>Notes App</h1>
      <From></From>
      <NoteCards></NoteCards>
    </div>
  );
}

export default App;
