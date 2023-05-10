import { IProject } from "../components/Project";

export const projects: IProject[] = [
  {
    title: 'Pomodoro Timer',
    description: 'This is a pomodoro timer that can be used to track time spent on tasks. It can be customized by its settings to change the time and intervals.',
    link: 'https://github.com/denizburduroglu/sauce-boss',
    techStack: [
      'Angular',
      'HTML',
      'CSS',
      'TypeScript',
    ]
  },
  {
    title: 'Movie Search',
    description: `This is a movie search app that uses the OMDb API to search for movies. It is built using Angular and TypeScript. `,
    link: 'https://github.com/denizburduroglu/master-shot-app',
    techStack: [
      'Angular',
      'HTML',
      'CSS',
      'TypeScript',
    ]
  },
  {
    title: 'Gandalf Quotes',
    description: `This is a discord bot that displays random quotes by Gandalf from the Lord of the Rings.`,
    link: 'https://github.com/denizburduroglu/GandalfQuoteBot',
    techStack: [
      'JavaScript',
      'Node.js',
    ]
  },
];