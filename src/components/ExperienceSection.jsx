import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

/**
 * SkillCard Component
 * Modern glassmorphism card for individual skills.
 */
const SkillCard = ({ label, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
        className="px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm text-gray-300 text-sm font-medium flex items-center justify-center transition-all cursor-default"
    >
        {label}
    </motion.div>
);

/**
 * ExperienceSection Component (The Journey)
 * Combines narrative experience with technical expertise grids.
 */
const ExperienceSection = () => {
    const frontendSkills = ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Shadcn UI", "JavaScript"];
    const backendSkills = ["Node.js", "Express.js", "ASP.NET Core", "Python", "C++", "C#", "REST APIs"];
    const databaseTools = ["MongoDB", "SQL Server", "Supabase", "Git", "Docker", "Vercel"];

    return (
        <section id="experience" className="min-h-screen bg-black px-6 sm:px-10 lg:px-20 py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
                
                {/* 1. NARRATIVE JOURNEY */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 flex items-center gap-6 font-poppins">
                        <span className="w-12 h-1 bg-sky-500/40 rounded-full"></span>
                        The Journey
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed text-lg font-poppins">
                                My professional path is driven by a commitment to <span className="text-sky-400 font-semibold italic">engineering excellence</span>. I specialize in turning complex requirements into elegant, high-performance systems.
                            </p>
                            <p className="text-gray-400 leading-relaxed font-poppins">
                                From architecting multi-tenant platforms to fine-tuning user interactions and AI integrations, my focus remains constant: delivering software that is as reliable as it is visually compelling.
                            </p>
                        </div>

                        {/* Recent Role Highlight */}
                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-3xl bg-zinc-900/40 border border-sky-500/10 backdrop-blur-md relative group"
                            >
                                <h4 className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-2">Experience</h4>
                                <h3 className="text-2xl font-bold text-white mb-1">Web Development Intern</h3>
                                <p className="text-gray-400 mb-4 font-medium italic">Nexium | June 2025 - Aug 2025</p>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                                        Built AI recipe generator and blog summarizer using Next.js, Supabase, MongoDB, and Groq AI.
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="p-8 rounded-3xl bg-zinc-900/40 border border-sky-500/10 backdrop-blur-md relative group"
                            >
                                <h4 className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-2">Experience</h4>
                                <h3 className="text-2xl font-bold text-white mb-1">Teaching Assistant - Machine Learning</h3>
                                <p className="text-gray-400 mb-4 font-medium italic">PUCIT | Sep 2025 - Jan 2026</p>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                                        Created and graded quizzes and assignments, providing constructive feedback.
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. FRONTEND EXPERTISE */}
                <div className="space-y-10">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-semibold text-white flex items-center gap-4 font-poppins"
                    >
                        <span className="w-8 h-0.5 bg-sky-500/40 shrink-0"></span>
                        Frontend Expertise
                    </motion.h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                        {frontendSkills.map((skill, index) => (
                            <SkillCard key={index} label={skill} delay={index * 0.05} />
                        ))}
                    </div>
                </div>

                {/* 3. BACKEND & TOOLS */}
                <div className="space-y-10">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-semibold text-white flex items-center gap-4 font-poppins"
                    >
                        <span className="w-8 h-0.5 bg-sky-500/40 shrink-0"></span>
                        Backend & Database Tools
                    </motion.h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                        {backendSkills.concat(databaseTools).map((skill, index) => (
                            <SkillCard key={index} label={skill} delay={index * 0.05} />
                        ))}
                    </div>
                </div>

            </div>

            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 -right-64 w-125 h-125 bg-sky-500/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
};

export default ExperienceSection;
