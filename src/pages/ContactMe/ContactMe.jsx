import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SiStartrek } from 'react-icons/si';
import { LuUserRound } from 'react-icons/lu';
import { MdAttachEmail } from 'react-icons/md';
import { toast } from 'react-toastify';
const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_227buh2', 'template_vw12o6a', form.current, {
            publicKey: 'Hyqfp3dx0tpcXLCrH',
          })
          .then(
            () => {
              toast.success("Your email has sent successfully")
            },
            (error) => {
              toast.warning('FAILED...', error.text);
            },
          );
      };
    return (
        <motion.div id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className='max-w-screen-2xl text-white min-h-[600px] px-10 space-y-8 py-24'>
            <div className='text-center'>
                <button className='btn px-6 border-none text-lg hover:bg-violet-700 bg-violet-600 rounded-3xl text-white uppercase'><SiStartrek />Contact Me</button>
                <p className='mt-6 text-slate-950 dark:text-white'>Tell me more about yourself and what you're got in mind.</p>
            </div>
            <div className='max-w-screen-lg mx-auto pt-10'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='flex md:flex-row flex-col gap-6 w-full'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl dark:text-white">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full name" className="input rounded-none text-slate-950 focus:ring-1 border-2  border-gray-300 focus:ring-violet-700 focus:border-violet-700 focus:outline-none" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl dark:text-white">Your Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="input rounded-none text-slate-950 focus:ring-1 border-2  border-gray-300 focus:ring-violet-700 focus:border-violet-700 focus:outline-none" required />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl dark:text-white">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject" className="input rounded-none text-slate-950 focus:ring-1 border-2 focus:outline-0  border-gray-300 focus:ring-violet-700  focus:border-violet-700 focus:outline-none" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl dark:text-white">Message</span>
                        </label>
                       <textarea rows={10} placeholder='Your message...' className="rounded-none text-slate-950 p-3 focus:ring-1 border-2 focus:outline-0  border-gray-300 focus:ring-violet-700  focus:border-violet-700 focus:outline-none" required></textarea>
                    </div>
                    <div className='mt-10'>
                         <button className='btn border-none btn-lg text-xl hover:bg-violet-700 bg-violet-600 rounded-none text-white'><MdAttachEmail/>Send Message</button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactMe;