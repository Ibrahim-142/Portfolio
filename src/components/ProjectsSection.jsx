import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Music, Terminal, Zap } from 'lucide-react';

/**
 * ProjectCard Component
 * Individual project showcase with full description, features, and tech stack.
 */
const ProjectCard = ({ project, index }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 py-16 border-b border-zinc-800 last:border-0 group"
    >
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-sky-500/80 transition-colors font-poppins">
            {project.title}
        </h2>

        {/* Short Description */}
        <p className="text-gray-400 mb-8 text-lg leading-relaxed font-poppins">
            {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((tech, idx) => (
                <span
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/5 text-sm text-gray-300 font-medium"
                >
                    {tech}
                </span>
            ))}
        </div>

        {/* Features */}
        <div className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-sky-500/60" />
                Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-400">
                {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500/40 mt-1.5 shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
           {Array.isArray(project.links?.github) ? (
    project.links.github.map((link, idx) => (
        <motion.a
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-white bg-sky-500/30 hover:bg-sky-500/40 border border-sky-500/20 transition flex items-center gap-2 font-medium"
        >
            <Github size={18} />
            GitHub {idx + 1}
        </motion.a>
    ))
) : (
    project.links?.github && (
        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-white bg-sky-500/30 hover:bg-sky-500/40 border border-sky-500/20 transition flex items-center gap-2 font-medium"
        >
            <Github size={18} />
            View Source
        </motion.a>
    )
)}
            {project.links?.demo && (
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-white bg-zinc-800 hover:bg-zinc-700 transition flex items-center gap-2 font-medium"
                >
                    <ExternalLink size={18} />
                    Live Demo
                </motion.a>
            )}
            {project.links?.walkthrough && (
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.walkthrough}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-white bg-zinc-800 hover:bg-zinc-700 transition flex items-center gap-2 font-medium"
                >
                    <ExternalLink size={18} />
                    Walkthrough
                </motion.a>
            )}
        </div>
    </motion.section>
);

/**
 * ProjectsSection Component
 * Displays a curated selection of projects with a premium minimal aesthetic.
 */
const ProjectsSection = () => {
    const projects = [
          {
    title: "ShopMate — Conversational Commerce Assistant",
    description:
      "A production-style full-stack e-commerce platform with secure authentication, user-specific cart and order management, and intelligent chatbot-based product assistance. Built with a decoupled frontend-backend architecture and deployed on Vercel.",

    tech: [
      "React (Vite)",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "REST API Architecture"
    ],

    features: [
      "Implemented secure authentication system using JWT with httpOnly cookies and role-based session handling.",
      "Built scalable REST APIs using MVC architecture with Express and MongoDB.",
      "Developed user-specific cart and order management system with persistent state.",
      "Integrated rule-based chatbot for intelligent product search and cart interaction.",
      "Handled cross-origin authentication between deployed frontend and backend using secure CORS configuration."
    ],

    links: {
      github: [
        "https://github.com/Ibrahim-142/ecommerce",
        "https://github.com/Ibrahim-142/ecommercebackend"
      ],

      walkthrough:
        "https://www.loom.com/share/918b685cb4d649f4b6d4e7c13a6a4f60",

      demo:
        "https://shop-mate-ai-tau.vercel.app/"
    }
  }
,
 {
            title: "AI Medical Scribe FYP",
            description: "An AI medical scribe for real-time transcription and SOAP notes generation.",
            tech: ["FastAPI", "React", "WebSockets", "Celery", "PostgreSQL"],
            features: [
                "Real-time transcription using WebSockets.",
                "Scalable backend architecture with Celery.",
                "React SPA with JWT auth and real-time UI.",
                "SOAP notes system using Whisper Open AI Model"
            ],
            links: {
                github: "",
                walkthrough: "https://drive.google.com/file/d/1rbv1iiCIYIquOgY1Q5MixwVn8fkEvrtB/view"
            }
        },
           {
            title: "AI Recipe Generator",
            description: "AI recipe generator with authentication using Magic Link and optimized prompt workflows.",
            tech: ["Next.js", "Supabase", "MongoDB", "Groq AI", "n8n"],
            features: [
                "Groq AI integration using n8n workflows.",
                "Secure MongoDB storage for recipes.",
                "Optimized AI response quality."
            ],
            links: {
                github: "https://github.com/Ibrahim-142/Nexium_MuhammadIbrahim_Grand_Project",
                demo:"https://nexium-muhammad-ibrahim-grand-proje.vercel.app/"
                ,
                walkthrough: "https://www.loom.com/share/38092fa103744dd38d0e3f1df3814197"
            }
        },
       
        {
            title: "FoodPanda Clone",
            description: "A food delivery app with authentication, authorization, and real-time order management.",
            tech: ["ASP.NET Core", "SQL Server", "Entity Framework Core", "SignalR", "Bootstrap"],
            features: [
                "Real-time notifications using SignalR.",
                "Secure ASP.NET Core backend with SQL Server.",
                "Role-based authorization and order tracking."
            ],
            links: {
                github: "https://github.com/Ibrahim-142/FoodPandaIdentity",
                demo: ""
            }
        },
        {
            title: "Urdu Whisper ASR API",
            description: "A FastAPI service for real-time Urdu speech-to-text using a fine-tuned Whisper model.",
            tech: ["FastAPI", "Python", "Hugging Face", "Whisper"],
            features: [
                "Fine-tuned Whisper Urdu model integration.",
                "REST API for fast, real-time speech transcription.",
                "Deployed via Hugging Face Spaces."
            ],
            links: {
                github: "https://github.com/Ibrahim-142/Whisper-Urdu-Model",
                demo: "https://ibrahim145-whisperurdu-api.hf.space/docs#/default/transcribe_audio_transcribe_post"
            }
        },
     
        {
            title: "Blog Summarizer & Urdu Translator",
            description: "A web app to scrape articles, summarize, and translate to Urdu.",
            tech: ["Next.js", "Supabase", "MongoDB", "Tailwind CSS", "Shadcn UI"],
            features: [
                "Web scraping and AI-powered summarization.",
                "Seamless English to Urdu translation.",
                "Responsive UI with Framer Motion and localized toasts."
            ],
            links: {
                github: "https://github.com/Ibrahim-142/Nexium_Muhammad_Ibrahim_Assign2/tree/main/Internship/assignment2",
                demo: "https://nexium-muhammad-ibrahim-assign2.vercel.app/"
            }
        }
    ];

    return (
        <section id="projects" className="bg-black py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
                        My <span className="text-sky-500/40">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins italic">
                        A curated selection of projects demonstrating my ability to design, build, and deliver scalable, user-focused software solutions.
                    </p>
                </motion.div>

                {/* PROJECTS LIST */}
                <div className="space-y-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-sky-500/5 to-transparent pointer-events-none" />
        </section>
    );
};

export default ProjectsSection;
