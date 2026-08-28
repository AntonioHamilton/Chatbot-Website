import { useState } from 'react';
import Link from 'next/link';
import { Project } from 'src/types/Project';
import styles from './ProjectCard.module.scss';
import { GithubIcon } from '../Icons/GithubIcon';

type ProjectCardProps = Project & {
  // eslint-disable-next-line react/require-default-props
  variant?: 'project' | 'agent';
};

export const ProjectCard = ({
  title,
  description,
  image,
  gif,
  link,
  badges,
  github,
  variant = 'project',
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenLinkInNewTab = (url: string) => {
    if (!url) return;

    window.open(url, '_blank', 'noopener noreferrer');
  };

  const mediaClassName = `${styles['project-card__media']} ${
    variant === 'agent' ? styles['project-card__media--agent'] : ''
  }`;

  return (
    <Link
      href={link}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      className={styles['project-card']}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={mediaClassName}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className={styles['project-card__img']} />
        {gif && isHovered && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={gif}
            alt={`${title} preview`}
            className={styles['project-card__gif']}
          />
        )}
        <div className={styles['project-card__overlay']}>
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
        </div>
      </div>
      <h3 className={styles['project-card__title']}>{title}</h3>
      <div className={styles['project-card__badges']}>
        {badges.map((badge) => (
          <span key={badge} className={styles['project-card__badge']}>
            {badge}
          </span>
        ))}
      </div>
    </Link>
  );
};
