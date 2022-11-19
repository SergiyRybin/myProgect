import 'react-loader-spinner';
import Searchbar from '../Searchbar/Searchbar';
import s from '../App/App.module.css';
import ButtonBack from '../../../StartPage/ButtonBack';

const Lesson3 = () => {
  return (
    <div className={s.App}>
      <ButtonBack/>
      <Searchbar />
    </div>
  );
};

export default Lesson3;
