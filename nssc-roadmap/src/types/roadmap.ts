export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown or HTML description
  initialCode: {
    [key: string]: string; // filename -> code mapping
  };
  dependencies?: {
    [key: string]: string; // package -> version mapping
  };
}

export interface Module {
  id: string;
  title: string;
  icon: string; // Name of Lucide icon
  description: string;
  lessons: Lesson[];
}

export interface RoadmapData {
  modules: Module[];
}
