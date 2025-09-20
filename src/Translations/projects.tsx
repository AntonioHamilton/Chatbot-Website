import { Project } from 'src/types/Project';

export const projects: Record<string, Project[]> = {
  EN_US: [
    {
      title: 'Teatro Esporte',
      description: `This is the official website for the Teatro Esporte Club, an improvisation school based in Aracaju, Brazil. The project is built with Next.js and showcases the school's classes, workshops, and shows.`,
      image: '/images/projects/teatro-esporte.jpg',
      link: 'https://teatro-esporte.vercel.app/',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/teatro-esporte',
    },
    {
      title: 'Anotei',
      description:
        'Pop culture content management app that helps users organize and track their favorite TV shows, movies, anime, and books all in one place',
      image: '/images/projects/anotei.png',
      link: 'https://anotei-ten.vercel.app/',
      badges: ['React Native', 'TypeScript', 'Styled-Components', 'Expo'],
      github: 'https://github.com/AntonioHamilton/Anotei',
    },
    {
      title: 'Money Legends',
      description:
        'Created for the final project of the Information Systems course. It is a software engineering and AI project that aims to evaluate the win rate of League of Legends teams. It does this using a regressive random forest (a machine learning algorithm)',
      image: '/images/projects/moneylegends.png',
      link: 'https://money-legends.vercel.app/login',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/money-legends',
    },
    {
      title: 'Universe Project',
      description:
        "This was a project designed for my university's database classes. I worked on it with my friend Yves, and the main proposal was to display planets, stars, and moons in our galaxy",
      image: '/images/projects/universeproject.png',
      link: 'https://universeproject.vercel.app/',
      badges: ['React', 'MongoDB', 'Node.js', 'Express.js'],
      github: '',
    },
    {
      title: 'Ioasys Challenge',
      description:
        "Project developed for the Ioasys Company challenge interview. The idea was to create a login page and a book catalog on the app's home screen",
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
      title: 'Teatro Esporte',
      description: `Este é o site oficial do Clube Teatro Esporte, uma escola de improvisação com sede em Aracaju, Brasil. O projeto foi construído com Next.js e apresenta as aulas, workshops e shows da escola.`,
      image: '/images/projects/teatro-esporte.jpg',
      link: 'https://teatro-esporte.vercel.app/',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/teatro-esporte',
    },
    {
      title: 'Anotei',
      description:
        'Aplicativo gratuito de gerenciamento de conteúdo da cultura pop que ajuda os usuários a organizar e acompanhar seus programas de TV, filmes, animes e livros favoritos em um só lugar',
      image: '/images/projects/anotei.png',
      link: 'https://anotei-ten.vercel.app/',
      badges: ['React Native', 'TypeScript', 'Styled-Components', 'Expo'],
      github: 'https://github.com/AntonioHamilton/Anotei',
    },
    {
      title: 'Money Legends',
      description:
        'Criado para o trabalho de conclusão do curso de Sistemas de Informação. É um projeto de engenharia de software e IA que tem como objetivo avaliar a taxa de vitória de times de League of Legends, ele faz isso a partir de um random forest regressivo (algoritmo de machine learning)',
      image: '/images/projects/moneylegends.png',
      link: 'https://money-legends.vercel.app/login',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/money-legends',
    },
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
