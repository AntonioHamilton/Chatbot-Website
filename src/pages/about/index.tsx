import Head from 'next/head';
import { translations } from 'src/Translations';
import { useTranslation } from 'src/hooks/useTranslation';
import { GlassResumeCard } from '@/components/GlassResumeCard/GlassResumeCard';
import { Experiences } from 'src/Translations/experiences';
import Image from 'next/image';
import styles from './index.module.scss';

const About = () => {
  const { language } = useTranslation();

  return (
    <div className={styles.about}>
      <Head>
        <title>Sobre - Antônio Hamilton (Chat) | Desenvolvedor Front-End</title>
        <meta
          name="description"
          content="Conheça Antônio Hamilton, desenvolvedor Front-End com mais de 5 anos de experiência. Focado em performance, usabilidade e acessibilidade com React, Next.js e TypeScript."
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Sobre Antônio Hamilton (Chat)" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-End com mais de 5 anos de experiência. Minha paixão é a intersecção entre design e engenharia."
        />
        <meta
          property="og:url"
          content="https://chat-hamilton.vercel.app/about"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://chat-hamilton.vercel.app/images/profile.png"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={styles.about__main}>
        <section className={styles.about__presentation}>
          <Image
            src="/images/profile.png"
            width={124}
            height={124}
            alt="Profile"
          />
          {translations[language].about}
        </section>
        <div />
        <section>
          {Experiences[language].map((experience) => (
            <GlassResumeCard
              key={experience.title}
              title={experience.title}
              description={experience.description}
              time={experience.time}
              badges={experience.badges}
              link={experience.link}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default About;
