import { Experience } from 'src/types/Experience';

export const Experiences: Record<string, Experience[]> = {
  EN_US: [
    {
      title: 'Software Developer · Betnacional',
      link: 'https://betnacional.bet.br/',
      description: (
        <ul>
          <li>
            Led the mandatory annual customer validation with MFA: 90.7%
            conversion, 11.4k users in the first 10 days, zero incidents.
            Built a reusable MFA flow to pull it off.
          </li>
          <li>
            Owned the frontend for SPA 2579 compliance (responsible
            gambling) — the mandatory limits and protection-tool screens.
            16,394 customers completed the flow in a week, 92.7% kept
            playing normally, and 58% adopted the recommended limits.
          </li>
          <li>
            Ran a First-Time-Deposit onboarding experiment via Amplitude for
            727k+ users — result: +10% FTDs in the first 30 days.
          </li>
        </ul>
      ),
      time: '2025 - Present',
      badges: [
        'MFA',
        'Responsible Gaming',
        'Amplitude',
        'Customer & Identity',
        'Growth Experiments',
      ],
    },
    {
      title: 'Mid-Level Web Developer · Mercado Livre',
      link: 'https://www.mercadolivre.com.br/',
      description: (
        <ul>
          <li>
            Built fast, reliable webviews for our Point of Sale systems — no
            crashes, no headaches for the cashier.
          </li>
          <li>
            Cut 300+ lines of code and 12 files per project by building
            shared component libraries and middlewares, rolled out across
            10 company projects.
          </li>
          <li>
            Kept systems running for 50k+ active users and $100k+ in
            monthly transactions without breaking a sweat.
          </li>
        </ul>
      ),
      time: '2021 - 2025',
      badges: [
        'TypeScript',
        'NextJS',
        'React',
        'NodeJS',
        'Jest',
        'Kibana',
        'CI/CD Github Actions',
        'Point of Sale (POS)',
      ],
    },
  ],
  PT_BR: [
    {
      title: 'Desenvolvedor de Software · Betnacional',
      link: 'https://betnacional.bet.br/',
      description: (
        <ul>
          <li>
            Toquei a validação anual obrigatória de clientes com MFA: 90,7%
            de conversão, 11,4 mil usuários logo nos 10 primeiros dias e
            zero incidentes. Criei um fluxo de MFA reutilizável pra isso.
          </li>
          <li>
            Fui o front por trás da conformidade com a SPA 2579 (jogo
            responsável) — telas de limites e ferramentas de proteção.
            16.394 clientes passaram pelo fluxo em uma semana, 92,7%
            voltaram a apostar tranquilos e 58% adotaram os limites
            recomendados.
          </li>
          <li>
            Rodei um experimento de FTD (primeiro depósito) no onboarding
            via Amplitude, pra mais de 727 mil usuários — resultado: +10%
            de FTDs nos primeiros 30 dias.
          </li>
        </ul>
      ),
      time: '2025 - Atual',
      badges: [
        'MFA',
        'Jogo Responsável',
        'Amplitude',
        'Customer & Identity',
        'Growth Experiments',
      ],
    },
    {
      title: 'Desenvolvedor Web Pleno · Mercado Livre',
      link: 'https://www.mercadolivre.com.br/',
      description: (
        <ul>
          <li>
            Construí webviews rápidas pros nossos sistemas de PDV, sem
            travar e sem dor de cabeça pro usuário.
          </li>
          <li>
            Cortei 300+ linhas de código e 12 arquivos por projeto criando
            bibliotecas de componentes e middlewares — isso pegou em 10
            projetos da empresa.
          </li>
          <li>
            Mantive sistemas que aguentavam 50 mil+ usuários ativos e mais
            de US$100k em transações por mês, sem cair.
          </li>
        </ul>
      ),
      time: '2021 - 2025',
      badges: [
        'TypeScript',
        'NextJS',
        'React',
        'NodeJS',
        'Jest',
        'Kibana',
        'CI/CD Github Actions',
        'Point of Sale (POS)',
      ],
    },
  ],
};
