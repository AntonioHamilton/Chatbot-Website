import { Project } from 'src/types/Project';

export const projects: Record<string, Project[]> = {
  EN_US: [
    {
      title: 'Universe Project',
      description:
        "This was a project designed for my university's database classes. I worked on it with my friend Yves, and the main proposal was to display planets, stars, and moons in our galaxy.",
      image: '/images/projects/universeproject.png',
      link: 'https://universeproject.vercel.app/',
      badges: ['React', 'MongoDB', 'Node.js', 'Express.js'],
      github: '',
    },
    {
      title: 'Ioasys Challenge',
      description:
        "Project developed for the Ioasys Company challenge interview. The idea was to create a login page and a book catalog on the app's home screen.",
      image: '/images/projects/ioasyschallenge.png',
      link: 'https://desafio-books-frontend-omega.vercel.app/',
      badges: [
        'NextJS',
        'TypeScript',
        'Styled-Components',
        'REST API',
        'Vercel',
      ],
      github: '',
    },
  ],
  PT_BR: [
    {
      title: 'Universe Project',
      description:
        'Este foi um projeto desenvolvido para as aulas de banco de dados na minha universidade. Fiz em parceria com meu amigo Yves, e a proposta principal era exibir planetas, estrelas e luas da nossa galáxia',
      image: '/images/projects/universeproject.png',
      link: 'https://universeproject.vercel.app/',
      badges: ['React', 'MongoDB', 'Node.js', 'Express.js'],
      github: '',
    },
    {
      title: 'Ioasys Challenge',
      description:
        'Projeto desenvolvido para a entrevista de desafio da empresa Ioasys. A ideia era criar uma página de login e um catálogo de livros na página inicial do sistema web',
      image: '/images/projects/ioasyschallenge.png',
      link: 'https://desafio-books-frontend-omega.vercel.app/',
      badges: [
        'NextJS',
        'TypeScript',
        'Styled-Components',
        'API REST',
        'Vercel',
      ],
      github: '',
    },
  ],
};
