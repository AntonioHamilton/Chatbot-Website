import Image from 'next/image';
import Link from 'next/link';
import { Project } from 'src/types/Project';
import styles from './ProjectCard.module.scss';

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  badges,
  github,
}: Project) => (
  <Link
    href={link}
    aria-label={title}
    target="_blank"
    rel="noopener noreferrer"
    className={styles['project-card']}
  >
    <Image src={image} alt={title} width={120} height={70} />
    <div className={styles['project-card__content']}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{github}</p>
      <div className={styles['project-card__badges']}>
        {badges.map((badge) => (
          <span key={badge} className={styles['project-card__badge']}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  </Link>
);
