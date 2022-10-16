
interface IFedb{
  onLeaveFeedback(): void,
  name: string
}

const Button: React.FC<IFedb> = ({ onLeaveFeedback, name }) => (
  <button type="button" data-name={name} onClick={onLeaveFeedback}>
    {name}
  </button>
);


export default Button;
