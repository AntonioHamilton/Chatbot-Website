import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import Head from 'next/head';
import { projects } from 'src/Translations/projects';
import { useTranslation } from 'src/hooks/useTranslation';
import styles from './index.module.scss';

const Projects = () => {
  const { language } = useTranslation();

  return (
    <div className={styles.projects}>
      <Head>
        <title>Meus Projetos - Antônio Hamilton (Chat)</title>
        <meta
          name="description"
          content="Confira os projetos de desenvolvimento de Antônio Hamilton, incluindo sites, aplicativos e estudos de caso em IA."
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Projetos - Portfólio de Antônio Hamilton"
        />
        <meta
          property="og:description"
          content="Explore uma coleção de projetos de desenvolvimento, de aplicações web a sistemas de IA."
        />
        <meta
          property="og:url"
          content="https://chat-hamilton.vercel.app/projects"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://chat-hamilton.vercel.app/favicon.ico"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        {projects[language].map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </main>
    </div>
  );
};

export default Projects;
