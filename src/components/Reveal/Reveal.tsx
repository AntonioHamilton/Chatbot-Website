import { ReactNode } from 'react';
import { useInView } from 'src/hooks/useInView';
import styles from './Reveal.module.scss';

type RevealProps = {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  className?: string;
};

export const Reveal = ({ children, className = '' }: RevealProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isInView ? styles['reveal--visible'] : ''} ${className}`}
    >
      {children}
    </div>
  );
};
