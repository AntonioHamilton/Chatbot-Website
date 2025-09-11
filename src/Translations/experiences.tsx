import { Experience } from 'src/types/Experience';

export const Experiences: Record<string, Experience[]> = {
  EN_US: [
    {
      title: 'Mid-Level Web Developer · Mercado Livre',
      link: 'https://www.mercadolivre.com.br/',
      description: (
        <ul>
          <li>
            Developed high-performance webviews for Point of Sale (POS) systems,
            ensuring stability and usability.
          </li>
          <li>
            Reduced 300+ lines of code and 12 files per project by creating
            component libraries and server-side middlewares, adopted across 10
            corporate projects.
          </li>
          <li>
            Maintained scalable systems serving over 50k active users and
            processing US$100k+ in monthly transactions.
          </li>
        </ul>
      ),
      time: '2021 - 2025',
      badges: [
        'TypeScript',
        'NextJS',
        'React',
        'NodeJS',
        'HTML & SCSS',
        'Jest',
        'React Testing Library',
        'Kibana',
        'New Relic',
        'Datadog',
        'Jira',
        'Point of Sale (POS)',
        'CI/CD Github Actions',
      ],
    },
    {
      title: 'Junior Web Developer · Ioasys',
      link: 'https://ioasys.com.br/',
      description: (
        <ul>
          <li>
            Built a responsive web platform for talent pool registration and
            management, replacing Google Forms with a proprietary system.
          </li>
          <li>
            Acted as a full-stack developer from conception to deployment.
          </li>
        </ul>
      ),
      time: '2021 - 2021',
      badges: [
        'TypeScript',
        'React',
        'Storybook',
        'NodeJS',
        'Styled Components',
        'TailWindCSS',
        'Jest',
        'NestJS',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      title: 'Junior Web Developer · Explicaê',
      link: 'https://explicae.com.br/',
      description: (
        <ul>
          <li>
            Developed a frontend system from scratch that supports the education
            of thousands of people across Brazil
          </li>
          <li>
            Integrated live streaming functionality for delivering lessons
            within the platform
          </li>
          <li>Designed and implemented dozens of educational modules</li>
          <li>
            Built and maintained serverless APIs for scalable backend services
          </li>
        </ul>
      ),
      time: '2020 - 2021',
      badges: ['JavaScript', 'VueJS', 'NodeJS', 'Lambda', 'AWS'],
    },
    {
      title: 'Manager · Softeam',
      link: 'https://softeam.com.br/',
      description: (
        <ul>
          <li>
            Manage a team of 6 developers using Agile methodologies to deliver
            projects on time and within budget
          </li>
        </ul>
      ),
      time: '2020 - 2021',
      badges: ['Kanban', 'Communication', 'Management', 'Jira'],
    },
    {
      title: 'Developer · Softeam',
      link: 'https://softeam.com.br/',
      description: (
        <ul>
          <li>
            Develop and Integration of chatbot with WhatsApp and Facebook using
            Twilio and Dialogflow
          </li>
          <li>Website development with WordPress and PHP</li>
        </ul>
      ),
      time: '2019 - 2020',
      badges: [
        'Wordpress',
        'DialogFlow',
        'NodeJS',
        'React',
        'PostgreSQL',
        'MongoDB',
        'Heroku',
      ],
    },
  ],
  PT_BR: [
    {
      title: 'Desenvolvedor Web Pleno · Mercado Livre',
      link: 'https://www.mercadolivre.com.br/',
      description: (
        <ul>
          <li>
            Desenvolvi webviews performáticas para sistemas de Point of Sale
            (POS), garantindo estabilidade e fluidez.
          </li>
          <li>
            Reduzi 300+ linhas de código e 12 arquivos por projeto com a criação
            de bibliotecas de componentes e middlewares server-side, utilizadas
            em 10 projetos corporativos.
          </li>
          <li>
            Sustentei sistemas escaláveis com mais de 50k usuários ativos e
            US\$100k+ em transações mensais.
          </li>
        </ul>
      ),
      time: '2021 - 2025',
      badges: [
        'Typescript',
        'NextJS',
        'React',
        'NodeJS',
        'HTML & SCSS',
        'Jest',
        'Kibana',
        'New Relic',
        'Datadog',
        'Jira',
        'Point of Sale (POS)',
        'CI/CD Github Actions',
      ],
    },
    {
      title: 'Desenvolvedor Web Júnior · Ioasys',
      link: 'https://ioasys.com.br/',
      description: (
        <ul>
          <li>
            Construí plataforma web responsiva para cadastro e gestão de banco
            de talentos, substituindo Google Forms por um sistema proprietário.
          </li>
          <li>
            Atuei como desenvolvedor full-stack desde a concepção até a
            implantação do produto.
          </li>
        </ul>
      ),
      time: '2021 - 2021',
      badges: [
        'Typescript',
        'React',
        'Storybook',
        'NodeJS',
        'HTML & SCSS',
        'Jest',
        'NestJS',
      ],
    },
    {
      title: 'Desenvolvedor Web Júnior · Explicaê',
      link: 'https://explicae.com.br/',
      description: (
        <ul>
          <li>
            Desenvolvi um sistema frontend do zero que apoia a educação de
            milhares de pessoas em todo o Brasil
          </li>
          <li>
            Integrei funcionalidade de transmissão ao vivo para ministrar aulas
            dentro da plataforma
          </li>
          <li>Desenhei e implementei dezenas de módulos educacionais</li>
          <li>
            Construí e mantive APIs serverless para serviços de backend
            escaláveis
          </li>
        </ul>
      ),
      time: '2020 - 2021',
      badges: ['JavaScript', 'VueJS', 'NodeJS', 'Lambda', 'AWS'],
    },
    {
      title: 'Gerente · Softeam',
      link: 'https://softeam.com.br/',
      description: (
        <ul>
          <li>
            Gerenciei uma equipe de 6 desenvolvedores utilizando metodologias
            ágeis para entregar projetos no prazo e dentro do orçamento
          </li>
        </ul>
      ),
      time: '2020 - 2021',
      badges: ['Kanban', 'Comunicação', 'Gestão', 'Jira'],
    },
    {
      title: 'Desenvolvedor · Softeam',
      link: 'https://softeam.com.br/',
      description: (
        <ul>
          <li>
            Desenvolvimento e integração de chatbot ao WhatsApp e Facebook
            usando Twilio e Dialogflow
          </li>
          <li>Criação de sites com WordPress e PHP</li>
        </ul>
      ),
      time: '2019 - 2020',
      badges: [
        'Wordpress',
        'DialogFlow',
        'NodeJS',
        'React',
        'PostgreSQL',
        'MongoDB',
        'Heroku',
      ],
    },
  ],
};
