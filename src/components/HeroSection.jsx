import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Briefcase } from 'lucide-react';

/**
 * HeroSection Component
 * A premium centered hero section with framer-motion animations.
 */
const HeroSection = ({ scrollToSection }) => {
    return (
        <section
            id="home"
            className="min-h-screen bg-black flex items-center justify-center pt-20 sm:pt-24 relative overflow-hidden"
        >
            {/* Background Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-125 h-96 sm:h-125 bg-sky-500/20 blur-[120px] rounded-full z-0"
            />

            <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center justify-center relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center w-full"
                >
                    {/* Accent Line + Role */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-0.5 bg-sky-400/80"
                        />
                        <p className="text-sky-400/80 tracking-[0.2em] text-xs sm:text-sm font-medium uppercase font-poppins">
                            Full-Stack Software Engineer
                        </p>
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-0.5 bg-sky-400/80"
                        />
                    </div>

                    {/* Name */}
                    <h1 className="text-sky-50 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6 font-poppins">
                        Muhammad
                        <span className="block text-sky-500/40">Ibrahim</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10 font-poppins">
                        Dedicated to crafting sophisticated digital ecosystems that prioritize <span className="text-sky-400/80 font-semibold underline decoration-sky-500/20 underline-offset-4">technical precision</span> and user-centric design. Specializing in <span className="text-sky-400/80 font-semibold">MERN stack</span>, Next.js, and AI integrations to transform complex ideas into seamless, high-performance web applications.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-sky-500/40 cursor-pointer hover:bg-sky-500/50 text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 font-semibold border border-sky-500/30"
                        >
                            <Briefcase size={20} />
                            View Projects
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 border border-sky-500/40 text-sky-500/60 hover:bg-sky-500/10 rounded-xl transition-all text-center font-semibold flex items-center justify-center gap-2"
                        >
                            <Mail size={20} />
                            Contact Me
                        </motion.button>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 flex justify-center gap-8">
                        <motion.a
                            whileHover={{ y: -5, color: '#0ea5e9' }}
                            href="https://github.com/Ibrahim-142"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition-colors"
                        >
                            <Github size={28} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -5, color: '#0ea5e9' }}
                            href="https://linkedin.com/in/muhammad-ibrahim-a5609728a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition-colors"
                        >
                            <Linkedin size={28} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
