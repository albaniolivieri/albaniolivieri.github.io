export const bio = [
  "Welcome to my website! I am <strong>Albani Olivieri.</strong>",
  "I am a first year <strong>Ph.D. Student in Mechanical and Aerospace Engineering</strong> at University of California, San Diego, \
  working under the supervision of <a href='https://kramer.ucsd.edu/index.html' target='_blank'>Prof. Boris Kramer</a>.",
  "My current research interests are in optimization algorithms in the field of model order reductions for complex models such as Partial \
  Differential Equations. Specifically, I am currently working on algorithms that recast PDEs into an specific form, namely quadratization and \
  polynomialization for PDEs, from symbolical models and from data.",
  "In 2024 I obtained both my B.Sc. in Computer Science Engineering and my M.Sc. in Computer Science \
  from <a href='https://uchile.cl/' target='_blank'>Universidad de Chile</a>.",
  "You can find my <a href='../CV_Albani_Olivieri.pdf' target='_blank'>CV here</a>."
  
  // "I come from city called Coro, close to the coast in Venezuela. Thanks to my family's support, I was able to persue a carreer "
  // Talk about my internship in France
  // Talk about how passionate I am about teaching
];

export const news = [
  "<strong>October 2025:</strong> I attended the <a href='https://sites.uci.edu/controlworkshop/' target='_blank'>46th Southern California Control Workshop</a></strong> hosted at UC Irvine. \
  This is a meeting of control researchers in Southern California, to listen to technical presentations by local graduate students and postdoctoral researchers.",
  "<strong>June 2025:</strong> I participated in the 2025 <a href='https://aimath.org/workshops/upcoming/eagr-am/' target='_blank'>EaGR workshop</a></strong>, \
  where I learned about computer programming, mathematical modeling, and data management.",
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
    duration: "2024",
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
  }
];

export const teaching = [
  "<strong>Linear Systems Theory</strong>, Graduate course at the Department of Mechanical and Aerospace Engineering, University of Californis San Diego, 2025",
  "<strong>Algorithm and Data Structures Teaching Assistant</strong>, Undergraduate course at the Department of Computer Science, FCFM, Universidad de Chile, 2023",
  "<strong>Introduction to Programming Teaching Assistant</strong>, Undergraduate course at the Department of Computer Science, FCFM, Universidad de Chile, 2021",
  "<strong>Computational Tools for Engineering and Sciences Teaching Assistant</strong>, Undergraduate course at the Department of Computer Science, FCFM, Universidad de Chile, 2021",
];

export const talks = [
  {
    title: "Optimal Monomial Quadratization for PDEs",
    place: "Santiago, Chile",
    duration: "2023",
    subtitle: "XVI Workshop CeBiB",
    details: [''],
    tags: [
      "Symbolic Computation",
      "PDEs",
      "Discrete Optimization",
      "Branch-and-Bound",
      "Incremental Nearest Neighbor",
    ],
    icon: 'microphone'
  }
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
