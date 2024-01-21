export type THNData = {
  author: string;
  created_at: string;
  created_at_i: number;
  id: number;
  options: any[];
  children: THNData[];
  parent_id: string | null;
  points: number;
  story_id: number;
  text: string;
  title: string;
  type: string;
  url: string;
};
