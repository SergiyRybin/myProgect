
interface IStata {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const Statistics: React.FC<IStata> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>{total > 0 && `Total: ${total}`}</li>
    <li>{total > 0 && `Positive feedback: ${positivePercentage}%`}</li>
  </ul>
);
export default Statistics;
