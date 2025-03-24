export const bio = [
  "Welcome to my website! I'm <strong>Albani Olivieri</strong>",
  "I am a first year <strong>Ph.D. Student in Mechanical and Aerospace Engineering</strong> at University of California, San Diego, \
  working under the supervision of Prof. <a href='https://kramer.ucsd.edu/index.html' target='_blank'>Boris Kramer</a>.",
  "My current research interests are in optimization algorithms in the field of model order reductions for complex models such as Partial \
  Differential Equations. Specifically, I am currently working on algorithms that recast PDEs into an specific form, namely quadratization and \
  polynomialization for PDEs, from symbolical models and from data.",
  "My background is mainly in Computer Science. In 2024 I obtained both my B.Sc. in Computer Science Engineering and my M.Sc. in Computer Science \
  from  <a href='https://uchile.cl/' target='_blank'>Universidad de Chile</a>.",
  "Email: a1olivieri@ucsd.edu",
];

export const news = [
  "<strong>September 2024:</strong> I participated in the <a href='https://more2024.sciencesconf.org/' target='_blank'>MORe2024</a></strong> \
  conference here in La Jolla, CA. Here, I had the opportunity to present my work on quadratization for PDEs through a poster. It was a great \
  experience to meet other researchers in the field of model reduction and learn about their work and the state-of-the-art.",
  "<strong>September 2024:</strong> I moved from Santiago, Chile to San Diego, CA to start my Ph.D. in Mechanical and Aerospace Engineering at UC San Diego!",
  "<strong>December 2023:</strong> I participated in the 2023 <a href='https://www.cebib-chile.com/workshop2023' target='_blank'>CeBiB Workshop</a></strong> \
  that was held in Santiago, Chile. I gave a talk about my work on optimal and monomial quadratizations for PDEs and presented a poster on the same subject."
];


export const publications = [
  {
    title: "Monomial and Optimal Quadratization for PDEs",
    place: "Academic repository of Universidad de Chile",
    subtitle: "Master thesis",
    details: [
      "This thesis introduces an algorithm for obtaining quadratizations for Partial Differential Equations (PDE).\
      This is a technique where a PDE system with right-hand side expressions of degrees greater than two is lifted \
      or transformed into a PDE system with right-hand side expressions of at most quadratic degrees. To accomplish \
      this, new variables and partial differential equations corresponding to the relations of these auxiliary variables \
      are introduced. This procedure is used in several scientific fields, such as dynamical systems,nonlinear model \
      order reduction, and chemical reaction networks, among many others.",
    ],
    tags: ["Symbolic Computation", "PDEs", "Discrete optimization", "Branch and bound", "Incremental Nearest Neighbor"],
    icon: 'book'
  },
];

export const teaching = [
  "<strong>Algorithm and Data Structures Teaching Assitant</strong>, Undergraduate course at the Department of Computer Science, FCFM, Universidad de Chile, 2023",
  "<strong>Introduction to Programming Teaching Assitant</strong>, Undergraduate course at the Department of Computer Science, FCFM, Universidad de Chile, 2021",
  "<strong>Computational Tools for Engineering and Sciences</strong>, Undergraduate course at the Department of Computer Science, FCFM, Universidad de Chile, 2021",
];

export const talks = [
  {
    title: "Optimal Monomial Quadratization for PDEs",
    duration: "2023",
    subtitle: "XVI Workshop CeBiB",
    details: [],
    tags: [
      "Symbolic Computation",
      "PDEs",
      "Discrete Optimization",
      "Branch-and-Bound",
      "Incremental Nearest Neighbor",
    ],
    icon: 'microphone'
  },
];

export const footer = [
  //   {
  //     label: "Dev Profiles",
  //     data: [
  //       {
  //         text: "Stackoverflow",
  //         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
  //       },
  //       {
  //         text: "GitHub",
  //         link: "https://github.com/vinaysomawat",
  //       },
  //       {
  //         text: "LeetCode",
  //         link: "https://leetcode.com/somawatvinay/",
  //       },
  //     ],
  //   },
  //   {
  //     label: "Resources",
  //     data: [
  //       {
  //         text: "Enable Dark/Light Mode",
  //         func: "enableDarkMode()",
  //       },
  //       {
  //         text: "Print this page",
  //         func: "window.print()",
  //       },
  //       {
  //         text: "Clone this page",
  //         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
  //       },
  //     ],
  //   },
  {
    label: "Links",
    data: [
        {
          text: "Linkedin",
          link: "https://www.linkedin.com/in/albani-olivieri/",
        },
      {
        text: "Github",
        link: "https://github.com/albaniolivieri",
      },
    ],
  },
  {
    label: "copyright-text",
  },
];
