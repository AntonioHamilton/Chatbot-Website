import Link from 'next/link';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './FloatingMenu.module.scss'; // Crie um novo arquivo SCSS

// Exemplo de como importar ícones (use sua biblioteca preferida, ex: react-icons)
// import { FaHome, FaSearch, FaHeart, FaBell, FaUser } from 'react-icons/fa';

const navLinks: Record<string, any>[] = [
  { name: { PT_BR: 'Início', EN_US: 'Home' }, path: '/' },
  { name: { PT_BR: 'Sobre', EN_US: 'About' }, path: '/about' },
  { name: { PT_BR: 'Projetos', EN_US: 'Projects' }, path: '/projects' },
  // { name: { PT_BR: 'Blog', EN_US: 'Blog' }, path: '/blog' },
];

type FloatingMenuProps = {
  path: string;
};

export const FloatingMenu = ({ path }: FloatingMenuProps) => {
  const { language } = useTranslation();

  return (
    <nav className={styles.floatingMenu}>
      <ul className={styles.menuList}>
        {navLinks.map((link) => (
          <li key={link.name[language]} className={styles.menuItem}>
            <Link href={link.path}>
              <p
                className={`${styles.menuLink} ${path === link.path ? styles['menuLink--active'] : ''} `}
                aria-label={link.name[language]}
              >
                <span className={styles.linkText}>{link.name[language]}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
