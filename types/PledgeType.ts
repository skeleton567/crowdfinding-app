export type PledgeType = {
  total_amount: number;
  bookmarked: 1 | 0;
  backers: number;
  raised: number;
  days_left: number;
  pledge_types: {
    left: number;
    title: string;
  }[];
};
