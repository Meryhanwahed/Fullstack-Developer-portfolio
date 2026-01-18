import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveDemo: string;
  sourceCode: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured store built with Angular and .NET Core Web API with Stripe integration.',
      image: 'assets/images/projects/1.png',
      stack: ['Angular', '.NET Core', 'SQL Server', 'Stripe'],
      liveDemo: '#',
      sourceCode: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaboration tool using SignalR for instant task updates and notifications.',
      image: 'assets/images/projects/2.png',
      stack: ['Angular', 'SignalR', 'Entity Framework'],
      liveDemo: '#',
      sourceCode: '#'
    },
    {
      title: 'Social Network API',
      description: 'Clean Architecture backend with JWT authentication and high-performance data caching.',
      image: 'assets/images/projects/3.png',
      stack: ['.NET Core', 'Redis', 'PostgreSQL', 'Docker'],
      liveDemo: '#',
      sourceCode: '#'
    }
  ];
}
