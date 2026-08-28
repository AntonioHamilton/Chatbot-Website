import { Project } from 'src/types/Project';

export const agents: Record<string, Project[]> = {
  EN_US: [
    {
      title: 'AUVP Financial Agent',
      description:
        "A Claude Code subagent that runs my personal finance on the AUVP method: monthly budget, company research against the '3 pillars' checklist, and portfolio tracking. It never tells you to buy or sell — just does the homework.",
      image: '/images/projects/auvp-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/AUVP-financial-agent',
      badges: ['Claude Code', 'AUVP', 'Finance'],
      github: 'https://github.com/AntonioHamilton/AUVP-financial-agent',
    },
    {
      title: 'Impro Musician Agent',
      description:
        'A Claude Code subagent for live sound design in improv theater: builds tones, organizes keymaps, and double-checks before touching anything that could ruin a live show mid-scene.',
      image: '/images/projects/musician-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/impro-musician-agent',
      badges: ['Claude Code', 'FL Studio', 'Soundplant', 'Live Sound'],
      github: 'https://github.com/AntonioHamilton/impro-musician-agent',
    },
    {
      title: 'Game Master Agent',
      description:
        "A Claude Code subagent that helps run tabletop RPG campaigns: session planning, NPC creation, monster balancing, and post-session recaps. Extracted from a real Hunter x Hunter campaign I'm running.",
      image: '/images/projects/game-master-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/game-master-agent',
      badges: ['Claude Code', 'Tabletop RPG', 'Campaign Planning'],
      github: 'https://github.com/AntonioHamilton/game-master-agent',
    },
  ],
  PT_BR: [
    {
      title: 'AUVP Financial Agent',
      description:
        "Um subagent de Claude Code que toca minhas finanças no método AUVP: orçamento mensal, análise de empresas pelo checklist dos '3 pilares' e acompanhamento de carteira. Nunca manda comprar ou vender — só faz o trabalho pesado.",
      image: '/images/projects/auvp-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/AUVP-financial-agent',
      badges: ['Claude Code', 'AUVP', 'Finanças'],
      github: 'https://github.com/AntonioHamilton/AUVP-financial-agent',
    },
    {
      title: 'Impro Musician Agent',
      description:
        'Um subagent de Claude Code pra sonoplastia ao vivo em teatro de improviso: cria timbres, organiza keymaps e confere tudo antes de mexer em algo que possa estragar um show ao vivo no meio da cena.',
      image: '/images/projects/musician-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/impro-musician-agent',
      badges: ['Claude Code', 'FL Studio', 'Soundplant', 'Som ao Vivo'],
      github: 'https://github.com/AntonioHamilton/impro-musician-agent',
    },
    {
      title: 'Game Master Agent',
      description:
        'Um subagent de Claude Code pra ajudar a tocar campanhas de RPG de mesa: planejamento de sessão, criação de NPCs, balanceamento de monstros e recap pós-sessão. Extraído de uma campanha real de Hunter x Hunter que eu mestro.',
      image: '/images/projects/game-master-capivara.jpg',
      link: 'https://github.com/AntonioHamilton/game-master-agent',
      badges: ['Claude Code', 'RPG de Mesa', 'Planejamento de Campanha'],
      github: 'https://github.com/AntonioHamilton/game-master-agent',
    },
  ],
};
