export interface SkillCategory {
  category: string;
  skills: string[];
}

export const techStack: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["Python", "SQL", "C++", "TypeScript", "Data Structures & Algorithms"]
  },
  {
    category: "Data Science & Engineering",
    skills: ["Pandas", "NumPy", "Advanced Joins", "Statistical Normal Distribution", "Data Manipulation"]
  },
  {
    category: "Machine Learning & Architecture",
    skills: ["Scikit-Learn", "Model-Based Design (V-Cycle)", "Precision/Recall Optimization", "Time Complexity Analysis"]
  }
];