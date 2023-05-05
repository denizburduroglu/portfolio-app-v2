import { ExperienceProps } from "../components/Experience.component";

export const resume: ExperienceProps[] = [
  {
    fromDate: 'Feb 2023',
    toDate: 'Present',
    establishment: 'United Biosource Corporation',
    role: 'Full Stack Developer',
    summary: `United Biosource Corporation (UBC) is a global scientific and technology-enabled services
    organization that provides evidence-based solutions to healthcare and life sciences
    companies. Built web applications that maintained patient medical information and provided
    required product dosage.`,
    items: [
      `
      Developed full-stack applications utilizing cutting-edge technologies such as
      Angular 12 and .NET 5.
      `,
      `
      Created Custom Directives to customize the styling of DOM elements, delivering a
unique and visually appealing user interface.
      `,
      `
      Dynamically displayed data using Data Binding, RxJS operators, and Parameter
Binding, providing a dynamic and engaging user experience.
      `,
      `
      Improved runtime performance by deferring the loading of pages through Lazy
Loading, enhancing the overall user experience.
      `,
      `
      Conducted thorough unit testing on components and services using Jasmine and
      Karma, ensuring high code quality and reliability
      `,
      `
      Successfully implemented GraphQL Queries and Mutations to deliver scalable and
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
      Automated the deployment pipeline using Octopus Deploy for CI/CD.
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
    summary: `Con Edison is a leading utility company that provides energy-related products to the New
    York City area. Worked on multiple in house projects that enhance a mechanics ability to
    perform electric requests and operations.`,
    items: [
      `
      Designed and implemented full-stack applications using Angular 11 and .NET
      CORE 3, leveraging the latest technologies to deliver robust and scalable solutions.
      `
      ,
      `
      Created visually stunning front-end components using Bootstrap 4, SCSS, and
      Kendo UI, providing a seamless user experience.
      `,
      `
      Leveraged the capabilities of various Web APIs, including Service Worker API,
      IndexedDB, and Push Notifications, to provide comprehensive functionality such as
      offline support and Progressive Web App (PWA) features.
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
      Employed Singleton Services in .NET CORE to provide RESTful endpoints with
      CRUD capabilities, providing efficient data management and manipulation.
      `,
      `
      Enforced the use of Dynamic SQL Queries in Stored Procedures to prevent SQL
      injection attacks, ensuring the security and integrity of application data
      `,
      `
      Leveraged Azure cloud services to upload images to Blob Storage, providing high
      scalability and fault tolerance.
      `
    ]
  },
  {
    fromDate: 'Sept 2015',
    toDate: 'June 2019',
    establishment: 'University of Houston',
    role: 'B.S. in Computer Science',
    summary: 'Attending the University of Houston to obtain a B.S. in Computer Science. Has allowed me to gain a strong foundation in computer science and software engineering. I have gained a deep understanding of algorithms, data structures, software engineering principles, and computer architecture.',
    items: [
      `
      I was a teacher's assistant for a computer logistics and database management course. I had the opportunity to help students learn the basics of computer hardware and software, including operating systems, word processing, and spreadsheets. As well as assisting the instructor in teaching students the fundamentals of database management, SQL programming, and data modeling.
      `,
    ]
  }
]