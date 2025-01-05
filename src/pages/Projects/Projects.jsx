import React from 'react';
import { motion } from 'framer-motion';
import { SiStartrek } from 'react-icons/si';
import ProjectCard from '../../components/ProjectCard';
import shareplate from '../../assets/shareplate.png'
import wildlife from '../../assets/wildlife.png'
import gadget from '../../assets/gadget_heaven.png'
import { img } from 'motion/react-client';
const Projects = () => {
    return (
        <motion.div id='projects' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className='max-w-screen-2xl px-10 min-h-[600px] space-y-8 py-20'>
            <div className='text-center'>
                <button className='btn px-6 border-none text-lg hover:bg-violet-700 bg-violet-600 rounded-3xl text-white uppercase'><SiStartrek />Projects</button>
            </div>
            <div className='grid pt-14 md:grid-cols-3 gap-6 grid-cols-1'>
                <ProjectCard title="SharePlate" details="The website aims to serve as a Community Food Sharing and Surplus Reduction Platform that connects individuals, organizations, and businesses to address food waste and hunger. It facilitates the sharing of surplus food, making it accessible to those in need while promoting sustainability and community support" liveLink="https://a11-shareplate-website.web.app/" githubLink="https://github.com/Ariful544/shareplate" img={shareplate}/>
                <ProjectCard title="Wild life Safari" details="Our Wildlife Safari Website is your ultimate gateway to the wonders of the natural world. Designed to ignite the spirit of adventure and appreciation for the environment, this platform offers an immersive experience for nature enthusiasts and thrill-seekers alike." githubLink={"https://github.com/Ariful544/wild-life-safari"} liveLink={"https://eco-adventure-7b468.web.app/"} img={wildlife}/>
                <ProjectCard liveLink={"https://scintillating-syrniki-c14656.netlify.app/"} githubLink={"https://github.com/Ariful544/A8-gadget-heaven"} title="Gadget heaven" img={gadget} details={"GadgetHeaven is a gadget-buying website that allows users to browse and purchase various electric products"} />
            </div>
        </motion.div>
    );
};

export default Projects;