import { useState } from 'react';
import { notes as notesData } from './../data';
import Form from './components/Form';
import Empty from './components/Empty';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

function App() {

  const [notes, setNotes] = useState(notesData);

  const add = (note) => {
    notes.push(note);
    setNotes([...notes]);
  };

  return (
    <>
      <Header />

      <div className='container my-5'>
        <div className='row'>
          <div className='col'>
            <Form add={add} />
            <List notes={notes} />
            <Empty notes={notes} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
