
import { ReactNode } from 'react';
import s from '../Container/Container.module.css';

interface IContainer{
  children: ReactNode
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <div className={s.Container}>{children}</div>;
};

export default Container;
