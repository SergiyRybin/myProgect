import s from "./Statistics.module.css";
import { Items } from "../../types/types";

interface StatisticsType {
  stats: [];
}

const Statistics: React.FC<StatisticsType> = ({ stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {stats?.map((items: Items) => (
          <li key={items.id} className={s.item}>
            <span className={s.label}> {items.label} </span>
            <span className={s.percentage}> {items.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
