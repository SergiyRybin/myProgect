import Profile from "../Profile/Profile";
import user from "../../data/user.json";
import Statistics from "../Statistics/Statistics";
import data from "../../data/data.json";
import Friendlist from "../FriendList/FriendList";
import friends from "../../data/friends.json";
import TransactionHistory from "../Transaction/TransactionHistory";
import transactions from "../../data/transactions.json";

export default function FirstLesson() {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* <Statistics stats={data} /> */}
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>

    //
  );
}
