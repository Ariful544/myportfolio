import React from 'react';
import HeroSection from './HeroSection';
import AboutMe from '../About/AboutMe';
import SkillSection from '../Skills/SkillSection';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
           <section>
                <HeroSection/>
           </section>
           <section>
                <AboutMe/>
           </section>
           <section>
                <SkillSection/>
           </section>
           <section>
               <Projects/>
           </section>
           <section>
               <ContactMe/>
           </section>
        </div>
    );
};

export default Home;