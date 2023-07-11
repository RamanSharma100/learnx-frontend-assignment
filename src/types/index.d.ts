export type Route = {
  path: string;
  name: string;
  component: any;
  icon?: any;
};

export type CommunityFeedsType = {
  name: string;
  members: number;
  [key: string]: any;
};
