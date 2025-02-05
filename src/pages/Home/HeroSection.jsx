import { LuUserRound } from 'react-icons/lu';
import heroImg from '../../assets/portfolio.jpg';
import { GrNotes } from 'react-icons/gr';
import { motion } from "motion/react"
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const HeroSection = () => {
    return (
        <div className="flex md:flex-row md:mt-[76px] mt-[64px] flex-col min-h-[600px] dark:border-y dark:border-slate-500">
            <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
                className=" w-full space-y-10 py-20 px-10">
                <button className="btn rounded-none bg-amber-100 border-none hover:bg-amber-100 hover:border-none md:text-3xl text-xl text-amber-600">Hi! I'm MD Ariful islam</button>
                <h1 className='text-7xl text-slate-950 dark:text-white font-semibold'>Web Developer</h1>
                <div className='space-y-3'>
                    <div className='dark:text-white flex gap-6 text-slate-950'>
                        <a className='text-2xl text-blue-600' target="_blank" href='https://www.facebook.com/profile.php?id=61572916888633'><FaFacebook /></a>
                        <a className='text-2xl' target='_blank' href='https://github.com/Ariful544'><FaGithub /></a>
                        <a className='text-2xl text-blue-600' target='_blank' href="https://linkedin.com/in/ariful971671"><FaLinkedin /></a>
                    </div>
                </div>
                <p className='text-slate-600'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <div className='space-x-5'>
                    <button className='btn border-none btn-lg text-xl hover:bg-violet-700 bg-violet-600 rounded-none text-white'><LuUserRound />Hire Me</button>
                    <a rel="noopener noreferrer" target="_blank" href='https://drive.google.com/file/d/1K3WdcjUBVa6WCWautl-KG0JgPCHXOp-6/view?usp=sharing' className='btn btn-outline btn-lg text-xl dark:hover:bg-white dark:hover:text-slate-950 hover:bg-slate-950 rounded-none text-slate-950 dark:text-white' download><GrNotes />Download CV</a>
                </div>
            </motion.div>
            <div className="w-full md:px-0 px-4">
                <img className='md:h-[600px]  h-[500px] object-cover w-full' src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;