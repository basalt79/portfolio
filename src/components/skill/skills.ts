export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}
