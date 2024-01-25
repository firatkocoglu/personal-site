export const projects = [
  {
    id: 1,
    title: 'Web Talks',
    url: 'https://web-talks.net',
    cover_image: '/assets/images/cover/wt_cover.jpeg',
    images: [
      '/assets/images/carousel/web_talks/wt-1.jpeg',
      '/assets/images/carousel/web_talks/wt-2.jpeg',
      '/assets/images/carousel/web_talks/wt-3.jpeg',
      '/assets/images/carousel/web_talks/wt-4.jpeg',
      '/assets/images/carousel/web_talks/wt-5.jpeg',
    ],
    desc: 'A Medium-like Blog Application',
    detail:
      'Web Talks is a blog application where users can write articles about web development. Users must register and login first. Djoser is implemented to make authentication available. Users can read all articles,  write a new article, comment on existing articles, and delete and update their own articles. Recently viewed articles are tracked. Users can also search articles and save articles to see them in saved articles section. Users should update their profile for better experience. This application is deployed to AWS (EC2 instance for Django-React Application and connected to RDS PostgreSQL 15) and served by nginx.',
    tech: {
      cms: '',
      stack: {
        frontend: 'React',
        backend: 'Django',
        framework: 'Django Rest Framework',
        database: 'PostgreSQL',
        cloud: 'AWS EC2',
        server: 'nginx',
      },
    },
  },
  {
    id: 2,
    title: 'Web Site of Büyükçekmece Voleybol Akademisi',
    url: 'https://buyukcekmecevoleybolakademi.com',
    cover_image: '/assets/images/cover/bva_cover.jpeg',
    images: ['/assets/images/carousel/bva/bva.jpeg'],
    desc: 'A Real Client Website',
    detail:
      'Büyükçekmece Voleybol Akademisi Spor Kulübü is a local volleyball club in Turkey, Istanbul. This website is built for the club with using Wordpress and Elementor.',
    tech: {
      cms: 'WordPress',
      stack: {},
    },
  },
  {
    id: 3,
    title: 'To-Do Application',
    url: 'https://todo-app.click',
    cover_image: '/assets/images/cover/td_cover.jpeg',
    images: [
      '/assets/images/carousel/to_do/td-1.jpeg',
      '/assets/images/carousel/to_do/td-3.jpeg',
      '/assets/images/carousel/to_do/td-2.jpeg',
    ],
    desc: 'A To Do List Application',
    detail:
      'A basic to-do list application where users can add, delete or update tasks for a certain date. Users must register and login first. Djoser is implemented to make authentication available.  Users can mark tasks as completed or important. This application is deployed to AWS (EC2 instance for Django-React Application and connected to RDS PostgreSQL 15) and served by nginx.',

    tech: {
      cms: '',
      stack: {
        frontend: 'React',
        backend: 'Django',
        framework: 'Django Rest Framework',
        database: 'PostgreSQL',
        cloud: 'AWS EC2',
        server: 'nginx',
      },
    },
  },
];

export const certificates = [
  {
    id: 1,
    title: 'Meta Back-End Developer',
    url: 'https://www.coursera.org/account/accomplishments/professional-cert/MHMHWREE8CQW',
  },
  {
    id: 2,
    title: 'Full Stack Web Development with React',
    url: 'https://www.coursera.org/account/accomplishments/specialization/VYYEFRV3AZ7R',
  },
  {
    id: 3,
    title: 'Quality Assurance',
    url: 'https://www.freecodecamp.org/certification/firatkocoglu/quality-assurance-v7',
  },
  {
    id: 4,
    title: 'Back End Development and APIs',
    url: 'https://www.freecodecamp.org/certification/firatkocoglu/back-end-development-and-apis',
  },
  {
    id: 5,
    title: 'Data Visualization',
    url: 'https://www.freecodecamp.org/certification/firatkocoglu/data-visualization',
  },
  {
    id: 6,
    title: 'Front End Development Libraries',
    url: 'https://www.freecodecamp.org/certification/firatkocoglu/front-end-development-libraries',
  },
  {
    id: 7,
    title: 'JavaScript Algorithms and Data Structures',
    url: 'https://www.freecodecamp.org/certification/firatkocoglu/javascript-algorithms-and-data-structures',
  },
  {
    id: 8,
    title: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/firatkocoglu/responsive-web-design',
  },
  {
    id: 9,
    title: 'NodeJS Tutorials and Projects Course',
    url: 'https://www.udemy.com/certificate/UC-c074227f-6496-4064-83d1-8bf17ad7ed65/',
  },
  {
    id: 10,
    title: 'The Complete 2021 Web Development Bootcamp',
    url: ' https://www.udemy.com/certificate/UC-917db008-98fa-4c8d-bb25-1f0cdbe8516a/',
  },
];

export const skills = [
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'Python',
  'React',
  'Django',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MySQL',
  'Rest APIs',
  'Git',
  'AWS',
  'Wordpress',
];

export const languages = [
  { id: 1, lang: 'Turkish', level: 'Native' },
  { id: 2, lang: 'English', level: 'Fluent, can be used professionally' },
  { id: 3, lang: 'Spanish', level: 'Fluent' },
];
