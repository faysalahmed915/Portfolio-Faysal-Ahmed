import { Link } from "react-router";


const blogsData = [
  {
    id: 1,
    title: "Getting Started with MERN Stack Development",
    date: "2025-05-10",
    excerpt:
      "A beginner’s guide to building full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    url: "https://yourblog.com/getting-started-with-mern-stack",
  },
  {
    id: 2,
    title: "Building Responsive UI with Tailwind CSS",
    date: "2025-05-22",
    excerpt:
      "Learn how to quickly create beautiful and responsive user interfaces with Tailwind CSS utility classes.",
    url: "https://yourblog.com/building-responsive-ui-with-tailwind-css",
  },
  {
    id: 3,
    title: "Managing State in React with Redux",
    date: "2025-06-01",
    excerpt:
      "An introduction to using Redux for predictable state management in React applications.",
    url: "https://yourblog.com/managing-state-in-react-with-redux",
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js and Express",
    date: "2025-06-10",
    excerpt:
      "Step-by-step guide to creating RESTful APIs using Express.js framework on Node.js backend.",
    url: "https://yourblog.com/building-rest-apis-with-node-express",
  },
  {
    id: 5,
    title: "Deploying Your MERN App Using Firebase Hosting",
    date: "2025-06-15",
    excerpt:
      "How to deploy and host your MERN stack application quickly with Firebase Hosting and its powerful features.",
    url: "https://yourblog.com/deploying-mern-app-with-firebase",
  },
  {
    id: 6,
    title: "Effective Debugging Techniques in JavaScript",
    date: "2025-06-22",
    excerpt:
      "Tips and tools for finding and fixing bugs efficiently in JavaScript codebases.",
    url: "https://yourblog.com/effective-debugging-techniques-in-javascript",
  },
  {
    id: 7,
    title: "Responsive Web Design Principles with HTML5 & CSS3",
    date: "2025-06-28",
    excerpt:
      "Key concepts and best practices for making websites work beautifully on all devices.",
    url: "https://yourblog.com/responsive-web-design-html-css",
  },
  {
    id: 8,
    title: "Version Control Best Practices Using Git & GitHub",
    date: "2025-07-05",
    excerpt:
      "Master the fundamentals of Git workflows and GitHub collaboration to manage your projects smoothly.",
    url: "https://yourblog.com/version-control-best-practices-git-github",
  },
  {
    id: 9,
    title: "Building Scalable REST APIs: Best Practices",
    date: "2025-07-12",
    excerpt:
      "Learn architectural and design strategies to create scalable and maintainable REST APIs.",
    url: "https://yourblog.com/scalable-rest-api-best-practices",
  },
  {
    id: 10,
    title: "UI/UX Design Tips for Developers",
    date: "2025-07-20",
    excerpt:
      "Enhance your web projects with practical UI/UX design principles tailored for developers.",
    url: "https://yourblog.com/ui-ux-design-tips-for-developers",
  }
];



const Blogs = () => {
    return (
        <section className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 py-12" id="blogs">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogsData.map(({ id, title, date, excerpt }) => (
                    <article
                        key={id}
                        className="bg-base-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <time className="block mb-4 text-sm text-amber-700 opacity-80 text-muted">Publlished Date: {new Date(date).toLocaleDateString()}</time>
                        <p className="mb-4 text-primary opacity-90">{excerpt}</p>
                        {/* <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                        >
                            Read More →
                        </a> */}
                        <Link to={'/blogs'}
                        className="font-semibold hover:underline">
                        Read More →
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
