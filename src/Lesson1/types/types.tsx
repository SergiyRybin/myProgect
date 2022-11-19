
type IProfileProps ={
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

type FriendListItems = {
  id: number,
  isOnline: boolean,
  avatar: string,
  name: string
};

interface Items {
  id: string;
  label: string;
  percentage: number;
}

interface IStatisticsType {
  stats: Items[];
}

interface TransactionHistoryTypes {
  amount: string;
  currency: string;
  id: string;
  type: string;
}

interface Iprops  {
  items: TransactionHistoryTypes[];
}

export type { FriendListItems, IProfileProps, IStatisticsType, Iprops };
