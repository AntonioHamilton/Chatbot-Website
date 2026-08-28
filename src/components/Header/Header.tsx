import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './Header.module.scss';

const navLinks: Record<string, any>[] = [
  { name: { PT_BR: 'Sobre', EN_US: 'About' }, path: '/#about' },
  { name: { PT_BR: 'Skills', EN_US: 'Skills' }, path: '/#skills' },
  { name: { PT_BR: 'Projetos', EN_US: 'Projects' }, path: '/#projects' },
  { name: { PT_BR: 'Jogos', EN_US: 'Games' }, path: '/#games' },
  { name: { PT_BR: 'Contato', EN_US: 'Contact' }, path: '/#contact' },
];

export const Header = () => {
  const { language } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Chat"
            width={100}
            height={50}
            priority
          />
        </Link>
      </div>

      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          {navLinks.map((link) => (
            <li key={link.path as string} className={styles.header__navItem}>
              <Link href={link.path} className={styles.header__navLink}>
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
            width={20}
            height={14}
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
            width={20}
            height={14}
          />
        </button>
      </div>
    </header>
  );
};
