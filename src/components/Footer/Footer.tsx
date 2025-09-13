import React from 'react';
import styles from './Footer.module.scss';
import { LinkedinIcon } from '../Icons/LinkedinIcon';
import { GithubIcon } from '../Icons/GithubIcon';
import { EmailIcon } from '../Icons/EmailIcon';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__copyright}>Chat 🤖 {currentYear}</div>
      <div className={styles.footer__socials}>
        <a
          href="https://www.linkedin.com/in/antonio-hamilton/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className={styles.footer__icon} />
        </a>
        <a
          href="https://github.com/AntonioHamilton"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon className={styles.footer__icon} />
        </a>
        <a href="mailto:antoniohamilton.s.freitas@gmail.com" aria-label="Email">
          <EmailIcon className={styles.footer__icon} />
        </a>
      </div>
    </footer>
  );
};
