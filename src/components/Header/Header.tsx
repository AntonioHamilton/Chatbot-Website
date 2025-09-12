import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './Header.module.scss';
import { FloatingMenu } from '../HamburgerMenu/FloatingMenu';

const navLinks: Record<string, any>[] = [
  { name: { PT_BR: 'Início', EN_US: 'Home' }, path: '/' },
  { name: { PT_BR: 'Sobre', EN_US: 'About' }, path: '/about' },
  { name: { PT_BR: 'Projetos', EN_US: 'Projects' }, path: '/projects' },
  // { name: { PT_BR: 'Blog', EN_US: 'Blog' }, path: '/blog' },
];

export const Header = () => {
  const router = useRouter();
  const { language } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <span>CHATBOT</span>
        </Link>
      </div>

      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          {navLinks.map((link) => (
            <li key={link.path as string} className={styles.header__navItem}>
              <Link
                href={link.path}
                className={`${styles.header__navLink} ${
                  router.pathname === link.path
                    ? styles['header__navLink--active']
                    : ''
                }`}
              >
                {link.name[language]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.header__languageSelector}>
        <button
          type="button"
          className={styles.header__languageButton}
          onClick={() => handleLanguageChange('PT_BR')}
        >
          <Image
            src="/icons/br-flag.svg"
            alt="Mudar para Português"
            width={25}
            height={18}
          />
        </button>
        <button
          type="button"
          className={styles.header__languageButton}
          onClick={() => handleLanguageChange('EN_US')}
        >
          <Image
            src="/icons/us-flag.svg"
            alt="Switch to English"
            width={25}
            height={18}
          />
        </button>
      </div>

      <FloatingMenu />
    </header>
  );
};
