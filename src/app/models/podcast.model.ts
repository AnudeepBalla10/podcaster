export interface Podcast {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  audioUrl: string;
  duration: string;
  date: Date;
  tags: string[];
}