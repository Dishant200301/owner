export interface Review {
  id: number;
  rating: number;
  text: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}