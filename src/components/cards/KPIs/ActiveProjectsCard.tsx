import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DropDownCTAs from '@/components/common/DropDownCTAs';

interface Project {
  name: string;
  type: string;
  progress: number;
  color: string;
  icon: string;
}

const projects: Project[] = [
  {
    name: 'Laravel',
    type: 'eCommerce',
    progress: 54,
    color: '#FF3E3E',
    icon: '🔺',
  },
  {
    name: 'Figma',
    type: 'App UI Kit',
    progress: 85,
    color: '#3B82F6',
    icon: '🎨',
  },
  {
    name: 'VueJs',
    type: 'Calendar App',
    progress: 64,
    color: '#4CAF50',
    icon: '✅',
  },
  {
    name: 'React',
    type: 'Dashboard',
    progress: 40,
    color: '#00D8FF',
    icon: '⚛️',
  },
  {
    name: 'Bootstrap',
    type: 'Website',
    progress: 17,
    color: '#7C3AED',
    icon: '🅱️',
  },
  {
    name: 'Sketch',
    type: 'Website Design',
    progress: 30,
    color: '#FFB800',
    icon: '💎',
  },
];

function ProgressBar({ progress, color }: { progress: number; color: string }) {
  return (
    <div className="flex w-32 items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <span className="min-w-[40px] text-sm text-slate-400">{progress}%</span>
    </div>
  );
}

export default function ActiveProjectsCard() {
  const averageProgress = Math.round(
    projects.reduce((acc, project) => acc + project.progress, 0) /
      projects.length,
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-medium">Active Projects</CardTitle>
          <p className="text-sm text-slate-400">
            Average {averageProgress}% completed
          </p>
        </div>
        <DropDownCTAs
          options={[
            { label: 'View All', onClick: () => {} },
            { label: 'Sort By Progress', onClick: () => {} },
          ]}
        />
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map(project => (
          <div key={project.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl" role="img" aria-label={project.name}>
                {project.icon}
              </span>
              <div>
                <h3 className="mb-1 font-medium leading-none">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-400">{project.type}</p>
              </div>
            </div>
            <ProgressBar progress={project.progress} color={project.color} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
