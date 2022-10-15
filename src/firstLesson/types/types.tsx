type ProfileValue = {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: any
  // stats: {
  //   followers: string;
  //   views: string;
  //   likes: string;
  // };
};


type Items = { id: string; label: string; percentage: number };
type FriendListItems = {
  id: number,
  isOnline: boolean,
  avatar: string,
  name: string
};

export type { ProfileValue, Items, FriendListItems };
