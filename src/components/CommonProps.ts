import { ReactNode } from 'react';

export type CommonProps<T = unknown> = T & {
  className?: string;
  children?: ReactNode;
};
