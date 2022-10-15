import s from "./Profile.module.css";
import {IProfileProps} from '../../types/types'


const Profile: React.FC<IProfileProps> = ({
  username,
  tag,
  location,
  avatar,
  stats,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className="avatar" width="200" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className="quantity"> {stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
