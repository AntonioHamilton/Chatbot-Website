import Link from 'next/link';
import { Experience } from 'src/types/Experience';
import styles from './GlassResumeCard.module.scss';

export const GlassResumeCard = ({
  title,
  description,
  time,
  badges,
  link,
}: Experience) => (
  <Link
    href={link}
    aria-label={title}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.card}
  >
    <div className={styles.card__time}>{time}</div>
    <div className={styles['card__info-container']}>
      <h3>{title}</h3>
      <div>{description}</div>
      <div className={styles.card__badges}>
        {badges.map((badge) => (
          <span key={badge} className={styles.card__badge}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  </Link>
);
