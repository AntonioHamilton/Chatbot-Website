import { ReactNode } from 'react';

export type Experience = {
  title: string;
  link: string;
  description: ReactNode;
  time: string;
  badges: string[];
};
