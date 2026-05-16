"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { Lesson } from "@/types/roadmap";

interface InteractiveEditorProps {
  lesson: Lesson;
}

export default function InteractiveEditor({ lesson }: InteractiveEditorProps) {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden border border-border shadow-2xl glass-panel">
      <Sandpack
        template="react"
        theme="dark"
        files={{
          ...lesson.initialCode,
        }}
        customSetup={{
          dependencies: {
            ...lesson.dependencies,
          },
        }}
        options={{
          showNavigator: false,
          showTabs: true,
          editorHeight: 600,
          editorWidthPercentage: 55,
          wrapContent: true,
        }}
      />
    </div>
  );
}
