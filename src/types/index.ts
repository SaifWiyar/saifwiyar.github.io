export type Locale = 'en' | 'ps' | 'fa';
export type ThemeMode = 'light' | 'dark' | 'system';
export type LocalizedText = Record<Locale, string>;

export interface Skill { name: string; level: number; }
export interface SkillGroup { id: string; label: LocalizedText; skills: Skill[]; }
export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: 'ai' | 'ml' | 'nlp' | 'data' | 'research' | 'web';
  categoryLabel: LocalizedText;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}
export interface TimelineItem {
  year: string;
  title: LocalizedText;
  organization: LocalizedText;
  description: LocalizedText;
  type: 'education' | 'experience' | 'teaching' | 'research';
}
