import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { translations } from 'src/Translations';
import { Experiences } from 'src/Translations/experiences';
import { projects } from 'src/Translations/projects';
import { agents } from 'src/Translations/agents';
import { skills } from 'src/Translations/skills';
import { useTranslation } from 'src/hooks/useTranslation';
import { GlassResumeCard } from '@/components/GlassResumeCard/GlassResumeCard';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { Reveal } from '@/components/Reveal/Reveal';
import { LinkedinIcon } from '@/components/Icons/LinkedinIcon';
import { GithubIcon } from '@/components/Icons/GithubIcon';
import styles from './index.module.scss';

export const Home = () => {
  const { language } = useTranslation();
  const t = translations[language];
  const [showAllProjects, setShowAllProjects] = useState(false);

  const currentYear = new Date().getFullYear();
  const libraryProjects = projects[language];
  const mainProjects = libraryProjects.slice(0, 3);
  const secondaryProjects = libraryProjects.slice(3);

  return (
    <div className={styles.home}>
      <Head>
        <title>Antônio Hamilton - Portfólio Pessoal</title>
        <meta
          name="description"
          content="Bem-vindo ao portfólio de Antônio Hamilton (Chat). Explore meus projetos de desenvolvimento e saiba mais sobre mim."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section id="about" className={styles.section}>
        <Reveal className={styles.hero}>
          <div className={styles.hero__portraitWrapper}>
            <Image
              className={styles.hero__portrait}
              src="/images/profile.png"
              width={140}
              height={140}
              alt="Profile"
            />
            <span
              className={`${styles.hero__trinket} ${styles['hero__trinket--dice']}`}
              aria-hidden
            >
              🎲
            </span>
            <span
              className={`${styles.hero__trinket} ${styles['hero__trinket--code']}`}
              aria-hidden
            >
              💻
            </span>
          </div>
          <div className={styles.hero__content}>
            <span className={styles.hero__ribbon}>{t.featured_badge}</span>
            <h1 className={styles.hero__name}>Antônio Hamilton</h1>
            <p className={styles.hero__tagline}>{t.home}</p>
            <div className={styles.hero__about}>{t.about}</div>
          </div>
        </Reveal>
      </section>

      <section id="skills" className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionHeading}>{t.skills_heading}</h2>
          <div className={styles.skills__tags}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skills__tag}>
                {skill}
              </span>
            ))}
          </div>

          <h3 className={styles.subHeading}>{t.achievements_heading}</h3>
          <div className={styles.skills__achievements}>
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
          </div>
        </Reveal>
      </section>

      <section id="projects" className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionHeading}>{t.library_heading}</h2>
          <div className={styles.projects__grid}>
            {mainProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {secondaryProjects.length > 0 && (
            <>
              {showAllProjects && (
                <Reveal className={styles.projects__grid}>
                  {secondaryProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </Reveal>
              )}
              <button
                type="button"
                className={styles.seeMoreButton}
                onClick={() => setShowAllProjects((prev) => !prev)}
              >
                {showAllProjects ? t.see_less : t.see_more}
              </button>
            </>
          )}

          <h3 className={styles.subHeading}>{t.agents_heading}</h3>
          <div className={styles.projects__grid}>
            {agents[language].map((agent) => (
              <ProjectCard key={agent.title} {...agent} variant="agent" />
            ))}
          </div>
        </Reveal>
      </section>

      <section id="games" className={styles.section}>
        <Reveal>
          <div className={styles.games__panel}>
            <div>
              <h2 className={styles.sectionHeading}>{t.games_heading}</h2>
              <p className={styles.games__description}>
                {t.games_description}
              </p>
            </div>
            <a
              href="https://chat-4-fun.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.games__cta}
            >
              🎮 {t.games_cta}
            </a>
          </div>
        </Reveal>
      </section>

      <section id="contact" className={styles.section}>
        <Reveal className={styles.contact}>
          <h2 className={styles.sectionHeading}>{t.contact_heading}</h2>
          <p className={styles.contact__description}>
            {t.contact_description}
          </p>
          <div className={styles.contact__links}>
            <a
              href="https://www.linkedin.com/in/antonio-hamilton/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact__link}
            >
              <LinkedinIcon className={styles.contact__icon} />
              LinkedIn
            </a>
            <a
              href="https://github.com/AntonioHamilton"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact__link}
            >
              <GithubIcon className={styles.contact__icon} />
              GitHub
            </a>
          </div>
          <span className={styles.contact__email}>
            antoniohamilton.s.freitas@gmail.com
          </span>
          <p className={styles.contact__copyright}>Chat 🤖 {currentYear}</p>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
