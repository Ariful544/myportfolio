import React from 'react';
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiStartrek } from 'react-icons/si';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <motion.div id="aboutMe"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className='max-w-screen-2xl min-h-[600px] px-10 space-y-8 py-20'>
            <div>
                <button className='btn px-6 border-none text-lg hover:bg-violet-700 bg-violet-600 rounded-3xl text-white uppercase'><SiStartrek />About Me</button>
            </div>
            <h3 className='text-slate-950 dark:text-white md:text-3xl text-xl'>Hi! I'm MD Ariful islam</h3>
            <p className='text-slate-500'>I am a passionate and enthusiastic fresher web developer with a solid foundation in front-end and back-end development. I specialize in building responsive and user-friendly web applications using modern technologies. My technical expertise includes HTML, CSS, JavaScript, and the React.js framework for creating seamless and dynamic user interfaces. Additionally, I have hands-on experience in developing server-side applications using Node.js and Express.js, and I efficiently manage databases with MongoDB.I am also familiar with Firebase, which I leverage for user authentication, hosting, and database management, ensuring secure and scalable web solutions. My approach to development emphasizes clean code, continuous learning, and problem-solving. As a dedicated and fast learner, I am eager to contribute to innovative projects and grow as a professional in the field of web development.With a strong determination to enhance my skills and make a meaningful impact, I am looking for opportunities to work in a collaborative environment where I can bring value to the team while gaining practical experience and improving my craft.</p>
            <div className='flex md:flex-row flex-col justify-between'>
                <div className='space-y-3'>
                    <p className='text-slate-500 text-lg font-semibold'>Contact</p>
                    <p className='dark:text-white text-slate-950'>khidirerbari@gmail.com</p>
                </div>
                <div className='space-y-3'>
                    <p className='text-slate-500 text-lg font-semibold'>Phone</p>
                    <p className='dark:text-white text-slate-950'>+965 97167155</p>
                </div>
                <div className='space-y-3'>
                    <p className='text-slate-500 text-lg font-semibold'>Date Of Birth</p>
                    <p className='dark:text-white text-slate-950'>January 16,1995</p>
                </div>
                <div className='space-y-3'>
                    <p className='text-slate-500 text-lg font-semibold'>Spoken Languages</p>
                    <p className='dark:text-white text-slate-950'>Bangla-English-Hindi-Urdu-Arabic</p>
                </div>
                <div className='space-y-3'>
                    <p className='text-slate-500 text-lg font-semibold'>Interest</p>
                    <p className='dark:text-white text-slate-950'>Music, Reading, journey</p>
                </div>
                <div className='space-y-3'>
                    <p className='text-slate-500 text-lg font-semibold'>Social Media</p>
                    <div className='dark:text-white flex gap-6 text-slate-950'>
                        <a className='text-2xl text-blue-600' target="_blank" href='https://www.facebook.com/profile.php?id=61572916888633'><FaFacebook /></a>
                        <a className='text-2xl' target='_blank' href='https://github.com/Ariful544'><FaGithub /></a>
                        <a className='text-2xl text-blue-600' target='_blank' href="https://linkedin.com/in/ariful971671"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;