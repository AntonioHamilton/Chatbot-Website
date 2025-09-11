import { ReactNode } from 'react';

export type Project = {
  title: string;
  link: string;
  description: ReactNode;
  image: string;
  badges: string[];
  github?: string;
};
