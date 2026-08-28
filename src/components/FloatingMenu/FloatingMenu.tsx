import Link from 'next/link';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './FloatingMenu.module.scss';

const navLinks: Record<string, any>[] = [
  { name: { PT_BR: 'Sobre', EN_US: 'About' }, path: '/#about' },
  { name: { PT_BR: 'Skills', EN_US: 'Skills' }, path: '/#skills' },
  { name: { PT_BR: 'Projetos', EN_US: 'Projects' }, path: '/#projects' },
  { name: { PT_BR: 'Jogos', EN_US: 'Games' }, path: '/#games' },
  { name: { PT_BR: 'Contato', EN_US: 'Contact' }, path: '/#contact' },
];

export const FloatingMenu = () => {
  const { language } = useTranslation();

  return (
    <nav className={styles.floatingMenu}>
      <ul className={styles.menuList}>
        {navLinks.map((link) => (
          <li key={link.name[language]} className={styles.menuItem}>
            <Link href={link.path}>
              <p className={styles.menuLink} aria-label={link.name[language]}>
                <span className={styles.linkText}>{link.name[language]}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
