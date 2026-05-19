export interface Project {
  title: string;
  technologies: string[];
  date: string;
  metrics: string;
  points: string[];
  status: "Production" | "Beta" | "Completed";
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const projectsData: Project[] = [
  {
    title: "AI Cybersecurity Platform",
    technologies: ["Python", "Kafka", "React", "Docker", "Kubernetes", "TensorFlow"],
    date: "March 2026",
    metrics: "~82% Detection on CIC-IDS2018",
    status: "Production",
    points: [
      "Engineered a real-time, AI-driven SOC platform for detecting intrusions, zero-day attacks, and malware from streaming network traffic.",
      "Developed hybrid ML/DL pipelines (Isolation Forest, Autoencoders, LSTM) on live Kafka streams with sub-second threat detection.",
      "Deployed containerized microservices reducing incident response time by ~35% and boosting analyst efficiency by ~45%."
    ]
  },
  {
    title: "AI Chatbot Platform",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "OpenAI"],
    date: "October 2025",
    metrics: "95%+ Lighthouse Score // -35% Latency",
    status: "Beta",
    points: [
      "Developed a full-stack MERN chatbot processing 500+ daily queries with optimized asynchronous data handling.",
      "Designed high-performance UI using TypeScript and React achieving elite mobile responsiveness metrics.",
      "Optimized MongoDB indexing and schema structures to slash chat history retrieval latency by 200ms."
    ]
  },
  {
    title: "Scale Instagram Architecture",
    technologies: ["Python", "React.js", "Node.js", "AWS", "Firebase", "Chakra UI"],
    date: "December 2024",
    metrics: "+40% Content Delivery Speed",
    status: "Completed",
    points: [
      "Architected a media storage infrastructure utilizing AWS S3 and CloudFront, accelerating global speeds by 40%.",
      "Engineered a real-time 'Feed' algorithm in Python, increasing simulated user engagement metrics by 25%.",
      "Implemented session layers, throttling unauthorized access vectors by 60% across active test segments."
    ]
  },
  {
    title: "Predictive Finance Engine",
    technologies: ["Python", "Flask", "SQLite", "Pandas", "Statsmodels"],
    date: "August 2024",
    metrics: "90% Forecasting Accuracy",
    status: "Completed",
    points: [
      "Built an automated tracking backend processing over 1,000 algorithmic financial tracking metrics with 99% baseline accuracy.",
      "Developed time-series forecasting models via Statsmodels to predict month-end expenses with a 90% target precision accuracy loop.",
      "Leveraged Pandas data manipulation structures for deep programmatic data cleansing arrays."
    ]
  }
];

export const technicalSkills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "Java", "C", "SQL (MySQL, PostgreSQL)", "HTML5/CSS3"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NLP", "Time-Series Forecasting"]
  },
  {
    category: "Web Dev & Architecture",
    skills: ["React.js", "Node.js", "Express", "Flask", "TypeScript", "Chakra UI", "Dash", "RESTful APIs"]
  },
  {
    category: "Cloud, DevOps & Streaming",
    skills: ["AWS (S3/CloudFront)", "Docker", "Kubernetes", "Firebase", "Apache Kafka", "Git/GitHub"]
  },
  {
    category: "Databases & Core CS",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Redis", "OOP", "DBMS", "OS", "Networks", "SIEM/SOAR"]
  }
];

export const coursesData: string[] = [
  "Data Structures and Algorithms",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Cloud Computing",
  "Prompt Engineering"
];