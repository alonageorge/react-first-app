import { useEffect } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import { notes as notesData } from './../../data';

const List = ({ notes, remove, getAll }) => {
  useEffect(() => {
    getAll(notesData);
  }, []);

  return (
    <>
      {notes.map(note => (
        <Item key={note.id} note={note} remove={remove} />
      ))}
    </>
  );
};

export default List;

List.propTypes = {
  notes: PropTypes.array,
  remove: PropTypes.func,
  getAll: PropTypes.func,
};
