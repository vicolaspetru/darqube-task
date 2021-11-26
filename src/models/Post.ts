export interface Post {
  id: number;
  headline: string;
  summary: string;
  datetime: number;
  image: string;
  related: string;
  url: string;
  source: string;
  category?: string;
}
