import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ add }) => {
  const [note, setNote] = useState('');

  const handleSubmit = e => {
    try {
      e.preventDefault();

      if (note === '') {
        alert('Please add a note');
        return;
      }

      const id = uuidv4();
      const newNote = { id: id, note: note };

      add(newNote);
    } catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      setNote('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-group mb-4'>
          <input
            type='text'
            className='form-control'
            placeholder='Write some notes...'
            onChange={e => setNote(e.target.value)}
            value={note}
          />
          <button className='btn btn-success' type='submit'>
            <FaPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

Form.propTypes = {
  add: PropTypes.func,
};
