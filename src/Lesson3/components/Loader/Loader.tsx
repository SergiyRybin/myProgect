import { Grid } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

const Loader: React.FC =() =>{
  return (
    <div className={s.Loader}>
      <Grid color="#00BFFF" height={80} width={80} />
    </div>
  );
}
export default Loader;
