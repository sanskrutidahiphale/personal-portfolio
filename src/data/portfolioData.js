// ────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize your portfolio.
// Every section pulls its content from here.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sanskruti Dahiphale',
  role: 'Computer Engineering Student, Software Developer, AI & ML Enthusiast',
  tagline: 'Building meaningful software with curiosity, creativity, and code.',
  location: 'Pune, India',
  email: 'sanskrutidahiphale475@gmail.com',
  resumeUrl: '/resume.pdf', // place your resume file in /public
  github: 'https://github.com/sanskrutidahiphale',
  linkedin: 'https://www.linkedin.com/in/sanskruti-dahiphale-0b6391320/',
  avatarInitials: 'SD',
  // To use a real photo, place it in /public (e.g. /profile.jpg)
  // and set avatarImage: '/profile.jpg'
  avatarImage: '/profile.jpg',
}

export const about = {
  paragraphs: [
    
  `I'm a Final Year Computer Engineering student at PCCOE, Pune, passionate about Software Development, AI, and building real-world applications. I enjoy solving problems through clean, efficient code and continuously learning modern technologies.`,

  `My experience includes academic projects, AI-focused internships, and leading the PCCOE ACM-W Student Chapter. I'm always looking for opportunities to grow as a developer and contribute to impactful software solutions.`

  ],
  facts: [
    { label: 'Based in', value: 'Pune, India' },
    { label: 'Currently', value: 'Studying at PCCOE' },
    { label: 'Focused on', value: 'Software Development & AI' },
  ],
}

export const education = [
  {
    year: '2023 — 2027',
    school: 'Pimpri Chinchwad College of Engineering, Pune',
    degree: 'B.Tech in Computer Engineering',
    detail: 'CGPA: 8.28/10 — Relevant coursework: DSA, OOP, DBMS, Computer Networks, Web Development, Operating systems, Cloud computing.',
  },
  {
    year: '2021 — 2023',
    school: 'Vidya Valley Jr. College',
    degree: 'Higher Secondary Education (Science)',
    detail: 'Scored 87.67 — Focused on Mathematics and Computer Science.',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ["C", "C++", "Python", "JavaScript"],
  },
  {
    category: 'Core Computer Science',
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
  },
  {
    category: 'AI & Data',
    items: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Data Mining", "Generative AI"],
  },
  {
    category: 'Databases & Tools',
    items: ['MongoDB', 'MySQL', 'Git & GitHub', 'VS Code', "Power Bi", "Linux", "Google Colab"],
  },
  
  {
    category: 'Design',
    items: ['Figma', "UI/UX"],
  },
]

export const projects = [
  {
    title: 'Hospital Digital Queue Management System',
    description: 'Developed a full-stack hospital queue management system to streamline patient appointments, reduce waiting times, and improve hospital operations. Implemented secure authentication, role-based access control, real-time queue tracking, and AI-based waiting time prediction.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/sanskrutidahiphale/MediQueue-Hospital-System',
  },
  {
    title: 'Traffic Accident Analysis System',
    description: 'Built a Python-based analytics platform to analyze traffic accident datasets, identify accident patterns, and generate interactive visualizations. Implemented data preprocessing, statistical analysis, and dashboards using Streamlit and Plotly.',
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Scikit-learn', 'Mlxtend'],
    github: 'https://github.com/sanskrutidahiphale/traffic-accident-analysis',
  },
  {
    title: 'Offline Multimodal Retrieval-Augmented Generation (RAG) System',
    description: 'Designed and developed an offline multimodal RAG system capable of retrieving, processing, and generating context-aware responses for smart automation using text and image inputs.',
    stack: ['Python', 'Generative AI', 'RAG', 'Machine Learning'],
  },
   {
    title: 'College Timetable Optimization System',
    description: 'Analyzed and compared optimization algorithms for automated college timetable generation by minimizing scheduling conflicts while considering faculty availability, classroom allocation, and time constraints.',
    stack: ['Python', 'Optimization Algorithms', 'Data Analysis'],
  },
  {
    title: 'AI-Based Cotton Disease Detection',
    description: 'Developed an AI-powered web application to identify cotton leaf diseases using machine learning. The system classifies diseases from uploaded images and provides treatment recommendations to support farmers.',
    stack: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'MySQL'],
  },
]

export const experience = [
   {
    role: 'AI & Machine Learning Virtual Intern',
    org: 'AICTE Eduskills',
    period: 'Nov 2025',
    detail:
      'Worked on machine learning assignments involving data preprocessing, feature engineering, model evaluation, and data visualization using Python, NumPy, Pandas, Scikit-learn, and Matplotlib.',
  },
  
  {
    role: 'Full Stack Web Development Virtual Intern',
    org: 'AICTE Eduskills',
    period: 'June 2025',
    detail:
      'Completed hands-on assignments covering HTML, CSS, JavaScript, backend development concepts, REST APIs, database connectivity, and the Software Development Life Cycle (SDLC).',
  },
   {
    role: 'Software Development Intern',
    org: 'Software Development Club, PCCOE',
    period: '2025',
    detail:
      'Developed an Offline Multimodal Retrieval-Augmented Generation (RAG) System for smart automation, gaining practical experience in AI application development, research, and software engineering.',
  },
  {
    role: 'Data Analytics Job Simulation',
    org: 'Deloitte Australia (Forage)',
    period: 'Dec 2025',
    detail:
      'Completed practical tasks in Data Analysis and Forensic Technology using Excel and Tableau. Analyzed datasets, created dashboards, and presented business insights through data visualization.',
  },
]

export const certifications = [
  {
    title: 'AWS for Everyone',
    issuer: 'Udemy',
    note: 'Learned cloud computing fundamentals, AWS core services, cloud architecture, storage, networking, and deployment concepts.',
  },

  {
    title: 'Java Masterclass',
    issuer: 'Udemy',
    note: 'Covered Java programming fundamentals, object-oriented programming, exception handling, collections, and core application development.',
  },

  {
    title: 'HTML & JavaScript Course',
    issuer: 'SoloLearn',
    note: 'Learned modern HTML, CSS, JavaScript fundamentals, DOM manipulation, and responsive web development basics.',
  },
]; 

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

