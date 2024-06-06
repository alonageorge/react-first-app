import Item from './Item';
import PropTypes from 'prop-types';

const List = ({ notes }) => {
  return (
    <>
      {notes.map((note) => <Item key={note.id} note={note} />)}
    </>
  )
}

export default List;

List.propTypes = {
  notes: PropTypes.array,
};