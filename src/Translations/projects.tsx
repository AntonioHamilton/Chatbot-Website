import { Project } from 'src/types/Project';

export const projects: Record<string, Project[]> = {
  EN_US: [
    {
      title: 'Claude Devkit',
      description:
        'A kit of skills, agents, scripts and MCP for AI-assisted development. It runs on Claude Code and, with a path tweak, on any harness that reads instruction files.',
      image: '/images/projects/developer-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/claude-devkit',
      badges: ['Claude Code', 'Skills', 'Subagents', 'MCP'],
      github: 'https://github.com/AntonioHamilton/claude-devkit',
    },
    {
      title: 'RPG Master Plan',
      description:
        'A desktop app for running tabletop RPG sessions: an infinite canvas to map scenes with notes, NPCs, clocks and timers linked by arrows, plus a bestiary that procedurally generates monsters (same name, same stats, every time).',
      image: '/images/projects/rpg-master-plan.png',
      gif: '/images/projects/rpg-master-plan.gif',
      link: 'https://github.com/AntonioHamilton/RPG-Master-Plan',
      badges: ['Electron', 'Vite', 'React', 'TypeScript'],
      github: 'https://github.com/AntonioHamilton/RPG-Master-Plan',
    },
    {
      title: 'Teatro Esporte',
      description:
        'The official site for Teatro Esporte, an improv theater school in Aracaju, Brazil. Classes, workshops, and shows, all in one place.',
      image: '/images/projects/teatro-esporte.jpg',
      gif: '/images/projects/teatro-esporte.gif',
      link: 'https://teatro-esporte.vercel.app/',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/teatro-esporte',
    },
    {
      title: 'Anotei',
      description:
        "A pop-culture tracker so you stop losing track of what you're watching, reading, and playing — shows, movies, anime, and books in one app.",
      image: '/images/projects/anotei.png',
      gif: '/images/projects/anotei.gif',
      link: 'https://anotei-ten.vercel.app/',
      badges: ['React Native', 'TypeScript', 'Styled-Components', 'Expo'],
      github: 'https://github.com/AntonioHamilton/Anotei',
    },
    {
      title: 'Money Legends',
      description:
        "My college capstone: a machine learning model (random forest) that predicts League of Legends match win rates. Nerded out on stats so you don't have to.",
      image: '/images/projects/moneylegends.png',
      link: 'https://money-legends.vercel.app/login',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/money-legends',
    },
    {
      title: 'Universe Project',
      description:
        'A database-class project built with my friend Yves: a tiny galaxy simulator showing planets, stars, and moons.',
      image: '/images/projects/universeproject.png',
      gif: '/images/projects/universeproject.gif',
      link: 'https://universeproject.vercel.app/',
      badges: ['React', 'MongoDB', 'Node.js', 'Express.js'],
      github: '',
    },
    {
      title: 'Ioasys Challenge',
      description:
        'A take-home job interview challenge: login screen + book catalog, built to show what I could do under a deadline.',
      image: '/images/projects/ioasyschallenge.png',
      link: 'https://desafio-books-frontend-omega.vercel.app/',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'REST API'],
      github: '',
    },
  ],
  PT_BR: [
    {
      title: 'Claude Devkit',
      description:
        'Kit de skills, agents, scripts e MCP para desenvolvimento assistido por IA. Funciona no Claude Code e, com adaptação de caminho, em qualquer harness que leia arquivos de instrução.',
      image: '/images/projects/developer-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/claude-devkit',
      badges: ['Claude Code', 'Skills', 'Subagents', 'MCP'],
      github: 'https://github.com/AntonioHamilton/claude-devkit',
    },
    {
      title: 'RPG Master Plan',
      description:
        'App desktop pra planejar sessões de RPG de mesa: um canvas infinito pra mapear cenas com notas, NPCs, relógios e timers conectados por setas, mais um bestiário que gera monstros proceduralmente (mesmo nome, sempre os mesmos atributos).',
      image: '/images/projects/rpg-master-plan.png',
      gif: '/images/projects/rpg-master-plan.gif',
      link: 'https://github.com/AntonioHamilton/RPG-Master-Plan',
      badges: ['Electron', 'Vite', 'React', 'TypeScript'],
      github: 'https://github.com/AntonioHamilton/RPG-Master-Plan',
    },
    {
      title: 'Teatro Esporte',
      description:
        'Site oficial do Teatro Esporte, escola de teatro de improviso em Aracaju. Aulas, workshops e espetáculos, tudo num lugar só.',
      image: '/images/projects/teatro-esporte.jpg',
      gif: '/images/projects/teatro-esporte.gif',
      link: 'https://teatro-esporte.vercel.app/',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/teatro-esporte',
    },
    {
      title: 'Anotei',
      description:
        'Um app pra parar de esquecer o que você tá assistindo, lendo e jogando — séries, filmes, animes e livros, tudo organizado num lugar só.',
      image: '/images/projects/anotei.png',
      gif: '/images/projects/anotei.gif',
      link: 'https://anotei-ten.vercel.app/',
      badges: ['React Native', 'TypeScript', 'Styled-Components', 'Expo'],
      github: 'https://github.com/AntonioHamilton/Anotei',
    },
    {
      title: 'Money Legends',
      description:
        'TCC da faculdade: um modelo de machine learning (random forest) que prevê a taxa de vitória de partidas de League of Legends. Nerdei nas estatísticas pra você não precisar.',
      image: '/images/projects/moneylegends.png',
      link: 'https://money-legends.vercel.app/login',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'Vercel'],
      github: 'https://github.com/AntonioHamilton/money-legends',
    },
    {
      title: 'Universe Project',
      description:
        'Projeto da faculdade (banco de dados) feito com meu amigo Yves: um mini simulador de galáxia com planetas, estrelas e luas.',
      image: '/images/projects/universeproject.png',
      gif: '/images/projects/universeproject.gif',
      link: 'https://universeproject.vercel.app/',
      badges: ['React', 'MongoDB', 'Node.js', 'Express.js'],
      github: '',
    },
    {
      title: 'Ioasys Challenge',
      description:
        'Desafio técnico de entrevista de emprego: tela de login + catálogo de livros, feito pra mostrar serviço sob prazo apertado.',
      image: '/images/projects/ioasyschallenge.png',
      link: 'https://desafio-books-frontend-omega.vercel.app/',
      badges: ['NextJS', 'TypeScript', 'Styled-Components', 'API REST'],
      github: '',
    },
  ],
};
