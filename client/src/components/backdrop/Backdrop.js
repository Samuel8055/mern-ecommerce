import './backdrop.css';

const Backdrop = ({show}) => {
  return show && <div className='backdrop'>Backdrop</div>;
};

export default Backdrop;
