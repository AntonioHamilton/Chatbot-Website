import Head from 'next/head';
import { translations } from 'src/Translations';
import Link from 'next/link';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './index.module.scss';

export const Home = () => {
  const { language } = useTranslation();

  return (
    <div className={styles.home}>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.home__title}>{translations[language].home}</div>
      <div className={styles.home__links}>
        <Link href="/projects" className={styles.home__link}>
          <p className={styles.home__text}>
            {translations[language].my_projects}
          </p>
        </Link>
        <Link href="/about" className={styles.home__link}>
          <p className={styles.home__text}>
            {translations[language].more_about_me}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
