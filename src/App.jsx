import { useState } from 'react';
import Form from './components/Form';
import Empty from './components/Empty';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

function App() {

  const [notes, setNotes] = useState([]);

  const add = (note) => {
    notes.push(note);
    setNotes([...notes]);
  };
  const remove = (note) => {
    const newNotes = notes.filter((item) => item.id !== note.id);
    setNotes(newNotes);
  };
  const getAll = (notesData) => {
    setNotes(notesData);
  };

  return (
    <>
      <Header />

      <div className='container my-5'>
        <div className='row'>
          <div className='col'>
            <Form add={add} />
            <List notes={notes} remove={remove} getAll={getAll} />
            <Empty notes={notes} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
