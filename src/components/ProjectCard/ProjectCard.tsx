import Image from 'next/image';
import Link from 'next/link';
import { Project } from 'src/types/Project';
import styles from './ProjectCard.module.scss';
import { GithubIcon } from '../Icons/GithubIcon';

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  badges,
  github,
}: Project) => {
  const handleOpenLinkInNewTab = (url: string) => {
    if (!url) return;

    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
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
        {github && (
          <button
            type="button"
            className={styles['project-card__github']}
            onClick={() => handleOpenLinkInNewTab(github)}
            aria-label={`github ${title}`}
          >
            <GithubIcon className={styles['project-card__icon']} />
          </button>
        )}
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
};
