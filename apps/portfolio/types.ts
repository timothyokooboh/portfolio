export type Project = {
  id: number;
  title: string;
  description: string;
  color: string;
  project_background: string;
  images: string[];
  tags: string[];
  url: string;
};

export type Portfolio = {
  body: Project[];
};
