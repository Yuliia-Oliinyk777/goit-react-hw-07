import { useSelector } from 'react-redux';
import style from './ErrorMessage.module.css';
import { PiSmileySadBold } from 'react-icons/pi';
import { selectError } from '../../redux/selectors';

const ErrorMessage = () => {
  const error = useSelector(selectError);
  return (
    <div className={style.errorWrap}>
      <PiSmileySadBold className={style.sad} size={80} />
      <p className={style.error}>{error}</p>
    </div>
  );
};

export default ErrorMessage;
