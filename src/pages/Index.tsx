import heatAdaptImage from "../../assets/heat-adapt.png";
import aiCareerRepImage from "../../assets/ai-career-rep.webp";
import { Github, Link } from "lucide-react";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";

const Index = () => {
  const projects = [
    {
      title: "Heat AI",
      description:
        "Heat AI is an endurance performance platform that uses machine learning, environmental modeling, and athlete training data to quantify heat adaptation and generate personalized training guidance. AI-driven coaching layers translate complex physiological signals into clear pacing, hydration, and acclimation strategies for safer and faster racing in hot conditions.",
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
        "AI Career Chatbot is a personalized conversational agent trained on my professional background, writing style, and career history. It uses a Python backend and OpenAI’s API to deliver tailored advice and answer questions as an AI version of me.",
      technologies: ["Next.js", "Typescript", "Python", "OpenAI"],
      github: "https://www.github.com/camjohnson-code/career-ai-chatbot",
      deployLink: "https://camjohnson.dev/chat",
      image: aiCareerRepImage,
    },
  ];
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full bg-background overflow-x-hidden">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-screen w-[80vw] flex flex-col gap-6 items-center justify-center text-center"
        >
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
            <button className="hover:scale-105 transition-all duration-300 px-7 py-3 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              View Work
            </button>
            <button className="bg-accent2 text-black px-6 py-3 rounded-full cursor-pointer text-foreground bg-background border-1 border-border">
              Contact Me
            </button>
          </div>
        </motion.section>

        <section
          id="projects"
          className="w-full flex flex-col items-center justify-center max-w-[1400px] mx-auto px-6 py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center"
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
          </motion.div>

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className={`flex gap-16 mb-16 items-center ${
                index % 2 === 1 ? "flex-row-reverse text-right" : "text-left"
              }`}
            >
              <div className="w-1/2">
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

              <div
                className={`w-1/2 ${index % 2 === 1 ? "text-right justify-end" : "text-left"}`}
              >
                <h3
                  className="text-4xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div
                  className={`mb-8 ${index % 2 === 1 ? "text-right" : "text-left"}`}
                >
                  <p className="text-sm font-semibold mb-3 uppercase tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technologies
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "justify-end" : ""}`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-black text-sm rounded-full border border-blue-200/50 font-medium"
                        style={{ fontFamily: "var(--font-roboto-mono)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`flex gap-6 items-center ${index % 2 === 1 ? "justify-end" : ""}`}
                >
                  {index % 2 === 1 ? (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View deployed project for ${project.title}`}
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Link className="w-4 h-4" />
                      </a>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                        View Project
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                        View Project
                      </span>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View deployed project for ${project.title}`}
                        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Link className="w-4 h-4" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Index;
