import { FaDove } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Empty = ({ notes }) => {
  return (
    <>
      {notes.length === 0 && (
        <div className='text-center p-3 text-muted'>
          <h1 className='display-4 text-secondary'>
            <FaDove className='me-2' />
          </h1>
          No notes found
        </div>
      )}
    </>
  );
};

export default Empty;

Empty.propTypes = {
  notes: PropTypes.array.isRequired,
};