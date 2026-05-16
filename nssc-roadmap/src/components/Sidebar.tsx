"use client";

import { useState } from "react";
import { roadmapData } from "@/data/roadmapData";
import { Atom, Server, Sparkles, Box, ChevronRight, ChevronDown } from "lucide-react";

interface SidebarProps {
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-5 h-5 text-accent" />,
  Server: <Server className="w-5 h-5 text-accent" />,
  Sparkles: <Sparkles className="w-5 h-5 text-primary" />,
  Box: <Box className="w-5 h-5 text-primary" />,
};

export default function Sidebar({ activeLessonId, onSelectLesson }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(
    roadmapData.modules.reduce((acc, mod) => ({ ...acc, [mod.id]: true }), {})
  );

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-80 h-screen shrink-0 glass-panel border-r border-border overflow-y-auto hidden md:block">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
          NSSC Masterclass
        </h1>
        <p className="text-sm text-gray-400">Zero to Hero Web Development</p>
      </div>

      <nav className="px-4 pb-10">
        {roadmapData.modules.map((module) => (
          <div key={module.id} className="mb-4">
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                {iconMap[module.icon]}
                <span className="font-semibold text-gray-200">{module.title}</span>
              </div>
              {expandedModules[module.id] ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>

            {expandedModules[module.id] && (
              <div className="mt-1 ml-4 pl-4 border-l border-border space-y-1">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson.id)}
                    className={`w-full text-left p-2 rounded-md text-sm transition-all ${
                      activeLessonId === lesson.id
                        ? "bg-primary/20 text-white border border-primary/30"
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    }`}
                  >
                    {lesson.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
