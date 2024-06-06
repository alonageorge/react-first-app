import { FaFeather } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <h1 className="text-center mt-5 display-1 fw-bolder text-dark-emphasis">
        <FaFeather size={'3rem'} className='text-success' /> notesy
      </h1>
    </>
  );
};

export default Header;
