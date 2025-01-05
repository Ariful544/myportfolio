import React from 'react';
import {motion} from 'framer-motion';
import { SiStartrek } from 'react-icons/si';
import SkillCard from '../../components/SkillCard';
import html from '../../assets/icons8-html-5-48.png'
import css from '../../assets/icons8-css3-50.png'
import javascript from '../../assets/icons8-javascript-48.png'
import react from '../../assets/icons8-react-30.png'
import nodejs from '../../assets/icons8-node-js-50.png'
import mongodb from '../../assets/icons8-mongodb-48.png'
import express from '../../assets/icons8-express-js-50.png'
import php from '../../assets/icons8-php-50.png'
import firebase from '../../assets/icons8-firebase-48.png'
import laravel from '../../assets/icons8-laravel-50.png'
import python from '../../assets/icons8-python-50.png'
import mysql from '../../assets/icons8-mysql-50.png'
const SkillSection = () => {
    return (
        <motion.div id='skills'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount:0.1 }}
        transition={{ duration: 1,ease: "easeInOut", delay: 0.5 }}
         className='max-w-screen-2xl px-10 min-h-[600px] dark:bg-slate-700 space-y-8 py-20'>
            <div className='text-center'>
                <button className='btn px-6 border-none text-lg hover:bg-violet-700 bg-violet-600 rounded-3xl text-white uppercase'><SiStartrek />Skill</button>
            </div>
            <div className='grid pt-14 md:grid-cols-6 gap-6 grid-cols-3'>
                <SkillCard title="HTML5" img={html}/>
                <SkillCard title="CSS3" img={css}/>
                <SkillCard title="javascript" img={javascript}/>
                <SkillCard title="react" img={react}/>
                <SkillCard title="firebase" img={firebase}/>
                <SkillCard title="nodejs" img={nodejs}/>
                <SkillCard title="express" img={express}/>
                <SkillCard title="mongodb" img={mongodb}/>
                <SkillCard title="php" img={php}/>
                <SkillCard title="laravel" img={laravel}/>
                <SkillCard title="python" img={python}/>
                <SkillCard title="MySql" img={mysql}/>
            </div>
        </motion.div>
    );
};

export default SkillSection;