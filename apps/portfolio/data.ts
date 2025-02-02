import type { Project } from "./types";
export const portfolio: Project[] = [
  {
    id: "sprintpoker",
    title: "SprintPoker",
    description:
      "SprintPoker is a web application that enables product teammates in organizations that practice agile methodologies to join a collaborative session in real-time and provide estimates to sprint tasks either in time estimates or story points.",
    project_background:
      "I developed Sprintpoker using Vue 3, TypeScript, Node.js, and GraphQL, which provided an excellent opportunity to practice and explore new technologies like Node.js and the GraphQL API specification. After deploying the application, I encountered an interesting challenge: the API was hosted on a free server instance from Render.com, which automatically shuts down after periods of inactivity. To address this, I created a bash script that sends requests to the API, creating and deleting a dummy record every ten minutes. I then deployed this script as a cron job using GitHub Actions. This solution kept the server active, preventing downtime and ensuring consistent API performance.",
    tags: ["Vue.js", "TypeScript", "GraphQL", "Node.js", "Cron job"],
    images: ["/sprintpoker-4.png", "/sprintpoker-2.png", "/sprintpoker-1.png"],

    color: "#5FB4A2",
    url: "https://sprintpoker-beta.vercel.app/#/",
  },
  {
    id: "realtrac",
    title: "Realtrac",
    description:
      "Realtrac is a real estate management solution for companies owners, real estate agents and buyers.",
    project_background:
      "Realtrac is a real estate management solution for companies owners, real estate agents and buyers. It is a comprehensive platform designed to automate and streamline every facet of property ownership, management and sales. I was responsible for building the frontend of the application using Next.js and TypeScript.",
    tags: ["React.js", "Next.js", "TypeScript"],
    images: ["/realtrac.png"],

    color: "#33323D",
    url: "https://frontend-realtrac.vercel.app/",
  },
  {
    id: "eazyaccess_customers",
    title: "Eazy Access (Customers)",
    description:
      "This project required me to create an experience in which users can search for vendors and patronize their products and services. I had to integrate this app with the vendors app which I built as a separate project. I used Quasar and Firebase.",
    project_background:
      "This project was built to complement the vendors app which was built as a separate application. I used Quasar in order to ship the mobile responsive version to Google Play Store and IOS store. Firebase was used for the backend service in order to leverage the built-in web sockets capability and provide users with a real time update experience.",
    tags: ["Vue.js", "Quasar", "Firebase", "Google Maps"],
    images: [
      "/eazy-access-customers-1.svg",
      "/eazy-access-customers-2.png",
      "/eazy-access-customers-3.png",
    ],

    color: "#5FB4A2",
    url: "https://eazyaccess-customers.web.app/#/",
  },
  {
    id: "eazyaccess_vendors",
    title: "Eazy Access (Vendors)",
    description:
      "This project required me to create an experience in which vendors can sign up, register their products and services, and upload a gallery that showcases their products and services in order to be discovered and contacted by interested customers. I had to integrate this app with the customers app which I built as a separate project. I used Quasar and Firebase.",
    project_background:
      "This project was built to complement the customers app which was built as a separate application. I used Quasar in order to ship the mobile responsive version to Google Play Store and IOS store. Firebase was used for the backend service in order to leverage the built-in web sockets capability and provide users with a real time update experience.",
    tags: ["Vue.js", "Quasar", "Firebase", "Google Maps"],
    images: [
      "/eazy-access-vendors-1.svg",
      "/eazy-access-vendors-2.png",
      "/eazy-access-vendors-3.png",
    ],

    color: "#33323D",
    url: "https://eazyaccess-vendors.web.app/#/",
  },
  {
    id: "techjobs",
    title: "Tech Jobs",
    description:
      "This project utilizes the public jobs API of the The Muse to create a tech jobs board. Users can filter across various tech categories or remote only jobs.",
    project_background:
      "I setup a mono repo architecture. I created a foundations package, a UI library package and a Nuxt 3 web app. The foundations contained the design tokens for color, typography and breakpoints. I utilized style-dictionary package to export the tokens into tailwind css classes and scss, css and javascript variables. Tailwind CSS was used primarily for styling the UI components and web app.",
    tags: [
      "Tailwind CSS",
      "Nuxt.js",
      "TypeScript",
      "Mono repo architecture",
      "Design tokens",
    ],
    images: ["/techjobs-1.png", "/techjobs-2.png", "/techjobs-3.png"],

    color: "#33323D",
    url: "https://techjobs-ruby.vercel.app",
  },
  {
    id: "myllo",
    title: "Myllo",
    description:
      "Myllo is a reading list management and note taking app. I also synced it with a Google Chrome Extension which I built to allow users seamlessly add any online resource to their reading list.",
    project_background:
      "I built Myllo to allow users have a central place for keeping track of their reading list across three categories: To Read, Reading, Have Read. Also, I wanted to create a resource sharing platform in which users can find interesting learning resources that others have added to their reading list and save them to their own reading list. Also, with this app, users can colocate items in their reading list with a note of the things they learned. I also integrated React-Beautiful-DND package to develop an intuitive drag and drop experience.",
    tags: ["React.js", "Chakra UI", "TypeScript", "Firebase", "Drag & Drop"],
    images: ["/myllo-1.png", "/myllo-2.png", "/myllo-3.png"],

    color: "#A854F7",
    url: "https://myllo.co",
  },
];
