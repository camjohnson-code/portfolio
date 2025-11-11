import heatAdaptImage from "../../assets/heat-adapt.png";
import aiCareerRepImage from "../../assets/ai-career-rep.webp";
import { Github, Link } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  const projects = [
    {
      title: "Heat AI",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard. Built for scale with microservices architecture.",
      technologies: [
        "Next.js",
        "Typescript",
        "Python",
        "PostgreSQL",
        "Redis",
        "Stripe",
      ],
      github: "https://www.github.com/camjohnson-code/heat-ai-frontend",
      deployLink: "https://getheatai.com",
      image: heatAdaptImage,
    },
    {
      title: "AI Career Chatbot",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard. Built for scale with microservices architecture.",
      technologies: [
        "Next.js",
        "Typescript",
        "Python",
        "PostgreSQL",
        "Redis",
        "Stripe",
      ],
      github: "https://www.github.com/camjohnson-code/career-ai-chatbot",
      deployLink: "https://camjohnson.dev/chat",
      image: aiCareerRepImage,
    },
  ];
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full bg-background">
        <section className="h-screen w-[80vw] flex flex-col gap-6 items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="uppercase font-medium text-sm tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Software Engineer
            </p>
            <p className="text-xs font-light">
              Building exceptional digital experiences
            </p>
          </div>
          <h1 className="text-8xl font-bold">
            Crafting robust software with clean code and purpose
          </h1>
          <p className="text-lg font-light text-muted max-w-4xl">
            I build end-to-end applications with expertise in scalable
            microservices, test-driven development (TDD), and user-centric
            design principles.
          </p>
          <div className="flex gap-6">
            <button className="hover:scale-103 transition-all duration-300 bg-accent1 text-black px-7 py-3 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              View Work
            </button>
            <button className="bg-accent2 text-black px-6 py-3 rounded-full cursor-pointer text-foreground bg-background border-1 border-border">
              Contact Me
            </button>
          </div>
        </section>

        <section
          id="projects"
          className="w-full flex flex-col items-center justify-center max-w-[1400px] mx-auto px-6 py-24"
        >
          <p className="uppercase font-medium text-sm tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Work
          </p>
          <h2 className="text-6xl font-bold text-center mt-4 mb-2">
            Selected Projects
          </h2>
          <p className="text-center text-md font-light text-muted w-1/2 mb-10">
            A selection of projects showcasing my expertise in full-stack
            development, system design, and modern web technologies.
          </p>

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center ${
                index % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-3xl group-hover:blur-3xl transition-all opacity-0 group-hover:opacity-100" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1280}
                    height={720}
                    className="relative w-full rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow"
                  />
                </div>
              </div>

              <div className="text-left">
                <h3
                  className="text-4xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="mb-8">
                  <p className="text-sm font-semibold mb-3 uppercase tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-foreground text-sm rounded-full border border-blue-200/50 font-medium"
                        style={{ fontFamily: "var(--font-roboto-mono)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                    View Project
                  </span>
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View deployed project for ${project.title}`}
                    className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Link className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${project.title}`}
                    className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Index;
