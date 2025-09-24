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
        <title>Antônio Hamilton - Portfólio Pessoal</title>
        <meta
          name="description"
          content="Bem-vindo ao portfólio de Antônio Hamilton (Chat). Explore meus projetos de desenvolvimento e saiba mais sobre mim."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags (para WhatsApp e Instagram) */}
        <meta property="og:title" content="Antônio Hamilton - Portfólio" />
        <meta
          property="og:description"
          content="Explore meus projetos de desenvolvimento e conheça um pouco mais sobre mim."
        />
        <meta property="og:url" content="https://chat-hamilton.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://chat-hamilton.vercel.app/favicon.ico"
        />

        {/* Twitter Card Tags (para Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
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
