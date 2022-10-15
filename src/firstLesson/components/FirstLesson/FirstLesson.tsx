import Profile from "../Profile/Profile";
import user from "../../data/user.json";
import Statistics from "../Statistics/Statistics";
import data from "../../data/data.json";
import Friendlist from "../FriendList/FriendList";
import friends from "../../data/friends.json";
import TransactionHistory from "../Transaction/TransactionHistory";
import transactions from "../../data/transactions.json";
import React from "react";
import { useNavigate } from "react-router-dom";

const FirstLesson: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="container">
      <button onClick={() => nav("/")}>Go Back</button>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default FirstLesson;
