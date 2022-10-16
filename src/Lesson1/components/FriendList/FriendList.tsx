import style from "../FriendList/FriendList.module.css"

type FTypes = {
  isOnline: boolean;
  avatar: string;
  name: string;
  id: number;
}

type Iprops = {
  friends: FTypes[];
}

const FriendList: React.FC<Iprops> = ({ friends }) => {
  return (
    <ul className={style.friend}>
      {friends.map((items) => (
        <li key={items.id} className={style.item}>
          <span
            className={style.status}
             style={items.isOnline ? {  backgroundColor : 'green' }: {}}
          />
          <img className={style.avatar} src={items.avatar} alt={items.name} width="48" />
          <p className={style.name}>{items.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;

