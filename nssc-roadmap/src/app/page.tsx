"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import InteractiveEditor from "@/components/InteractiveEditor";
import { roadmapData } from "@/data/roadmapData";
import { ChevronRight } from "lucide-react";
import GSAPWrapper from "@/components/GSAPWrapper";

export default function AppClient() {
  const [activeLessonId, setActiveLessonId] = useState(roadmapData.modules[0].lessons[0].id);

  // Find the active module and lesson
  let activeModule = roadmapData.modules[0];
  let activeLesson = activeModule.lessons[0];

  for (const m of roadmapData.modules) {
    const lesson = m.lessons.find((l) => l.id === activeLessonId);
    if (lesson) {
      activeModule = m;
      activeLesson = lesson;
      break;
    }
  }

  return (
    <GSAPWrapper>
      <div className="flex h-screen w-full overflow-hidden">
        <div className="gsap-sidebar hidden md:block">
          <Sidebar activeLessonId={activeLessonId} onSelectLesson={setActiveLessonId} />
        </div>

        <main className="flex-1 overflow-y-auto p-4 md:p-10 relative">
          <div className="max-w-6xl mx-auto space-y-8 pb-20">

            {/* Breadcrumbs */}
            <div className="gsap-hero flex items-center gap-2 text-sm text-gray-400">
            <span>{activeModule.title}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">{activeLesson.title}</span>
          </div>

            {/* Lesson Header */}
            <div className="gsap-hero space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {activeLesson.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {activeLesson.description}
            </p>
          </div>

            {/* Lesson Content (HTML) */}
            <div
              className="gsap-hero prose prose-invert prose-lg max-w-none text-gray-300"
              dangerouslySetInnerHTML={{ __html: activeLesson.content }}
            />

            {/* Interactive Compiler */}
            <div className="gsap-editor mt-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                {"</>"}
              </span>
              Interactive Space
            </h3>
            <p className="text-gray-400 mb-6">
              Edit the code below to see the changes instantly. This environment supports React, GSAP, and Three.js out of the box!
            </p>
              <InteractiveEditor lesson={activeLesson} />
            </div>

          </div>
        </main>
      </div>
    </GSAPWrapper>
  );
}
