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
        <title>About</title>
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
