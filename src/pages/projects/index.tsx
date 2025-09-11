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
        <title>Projects</title>
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
