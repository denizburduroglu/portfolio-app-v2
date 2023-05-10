import { IExperience } from "../components/Experience.component";

export const resume: IExperience[] = [
  {
    fromDate: 'Feb 2023',
    toDate: 'Present',
    establishment: 'United Biosource Corporation',
    role: 'Full-Stack Developer',
    summary: `UBC is a global scientific and technology-enabled services
    organization that provides solutions to healthcare and life sciences
    companies. Built web applications that maintained patient medical information and provided
    required product dosage.`,
    items: [
      `
      Developed full-stack applications utilizing cutting-edge technologies such as
      Angular 12 and .NET 5.
      `,
      `
      Improved runtime performance by deferring the loading of pages through Lazy
Loading, enhancing the overall user experience.
      `,
      `
      Conducted Test-Driven-Development (TDD) on components and services using Jasmine and
      Karma, ensuring high code quality and reliability
      `,
      `
      Implemented GraphQL Queries and Mutations to deliver scalable and
      efficient solutions.
      `,
      `
      Utilized Application Insights to monitor performance and diagnose issues.
      `,
      `
      Developed and integrated reCAPTCHA to enhance security and validate user
      interactions with the server, preventing spam and ensuring data integrity.
      `,
      `
      Collaborated with team members using tools such as MS Teams and Azure DevOps
      Server to deliver timely and effective feature enhancements and bug fixes.
      `
    ]
  },
  {
    fromDate: 'Feb 2020',
    toDate: 'Jan 2023',
    establishment: 'Con Edison',
    role: 'Full Stack Developer',
    summary: `Con Edison is a utility company that provides to the New
    York City area. Worked on multiple in-house projects that enhance a mechanics ability to
    perform and track electric requests and operations.`,
    items: [
      `
      Designed and implemented full-stack applications using Angular 11 and .NET
      CORE 3.
      `
      ,
      `
      Created re-usable front-end components using Bootstrap 4, SCSS, and
      Kendo UI. Which is now the basis of the company's design system. Being used across multiple applications.
      `,
      `
      Leveraged the capabilities of various Web APIs, including Service Worker API,
      IndexedDB, and Push Notifications. This allowed users to use the application offline and receive updates from management.
      `,
      `
      Implemented efficient state management using NGXS, providing a single source of
      truth for application data.
      `,
      `
      Used Angular Interceptors to handle errors and tokenize headers for HTTP calls,
      ensuring secure and reliable communication between client and server.
      `,
      `
      Implemented robust route-guards using CanActivate and CanDeactivate along with
      MSAL auth-services to provide secure authentication and authorization for users.
      `,
      `
      Leveraged Azure cloud services both for image and video capture capabilities of electrical operations.
      `
    ]
  },
  {
    fromDate: 'Sept 2015',
    toDate: 'June 2019',
    establishment: 'University of Houston',
    role: 'B.S. in Computer Science',
    summary: 'I have acquired a B.S. in Computer Science from the University of Houston. Obtaining a strong foundation in computer science and software engineering. I have gained a deep understanding of algorithms, data structures, software engineering principles, and computer architecture.',
    items: [
      `
      Was a teachers assistant for the following courses: Data Structures and Introduction to Computer Application Technology. Handled grading, tutoring, and office hours. Governed large classes and provided students with the necessary resources to succeed.
      `,
    ]
  }
]