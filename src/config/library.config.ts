import { Library } from "@/type";

export const libraries: Library[] = [
  {
    name: "@pixel-pulse/cache-brain",
    version: "v1.0.1",
    imgUrl: "https://cache-brain.netlify.app/og-image.png",
    description:
      "The lightweight, framework-agnostic core engine. Handles logic-heavy caching strategies and state synchronization across complex systems.",
    tags: ["Vanilla.js", "Core", "Caching"],
    npmLink: "https://www.npmjs.com/package/@pixel-pulse/cache-brain",
    websiteLink: "https://cache-brain.netlify.app/",
    status: "Stable",
  },
  {
    name: "@pixel-pulse/cache-brain-react",
    version: "v1.0.1",
    imgUrl: "https://cache-brain.netlify.app/og-image-next.png",
    description:
      "Official React adapter providing custom hooks and provider patterns for seamless cache integration in Next.js and React applications.",
    tags: ["React.js", "Next.js", "Caching", "TypeScript"],
    npmLink: "https://www.npmjs.com/package/@pixel-pulse/cache-brain-react",
    websiteLink: "https://cache-brain.netlify.app/",
    status: "Beta",
  },
  {
    name: "@pixel-pulse/cache-brain-react-devtools",
    version: "v1.0.1",
    imgUrl: "https://cache-brain.netlify.app/og-image-next.png",
    description:
      "A powerful visual debugger for real-time cache inspection. Monitor state transitions and architectural bottlenecks during development.",
    tags: ["DevTools", "Debugging", "DX", "Performance"],
    npmLink:
      "https://www.npmjs.com/package/@pixel-pulse/cache-brain-react-devtools",
    websiteLink: "https://cache-brain.netlify.app/",
    status: "Beta",
  },
  {
    name: "@pixel-pulse/cache-brain-vue",
    version: "v1.0.1",
    imgUrl: "https://cache-brain.netlify.app/og-image-nuxt.png",
    description:
      "Vue-specific composition utilities. Brings the power of the Brain engine to the Vue/Nuxt ecosystem with native reactivity support.",
    tags: ["Vue.js", "Nuxt.js", "Caching", "Composition API"],
    npmLink: "https://www.npmjs.com/package/@pixel-pulse/cache-brain-vue",
    websiteLink: "https://cache-brain.netlify.app/",
    status: "Beta",
  },
  {
    name: "@pixel-pulse/cache-brain-vue-devtools",
    version: "v1.0.1",
    imgUrl: "https://cache-brain.netlify.app/og-image-nuxt.png",
    description:
      "A powerful visual debugger for real-time cache inspection. Monitor state transitions and architectural bottlenecks during development.",
    tags: ["DevTools", "Debugging", "DX", "Performance"],
    npmLink:
      "https://www.npmjs.com/package/@pixel-pulse/cache-brain-vue-devtools",
    websiteLink: "https://cache-brain.netlify.app/",
    status: "Beta",
  },
];
