import { useContext } from 'react';
import logo from '../../public/logo.webp'
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../Provider/ThemeProvider';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const links = <>
        <li className='hover:text-violet-600 transition text-lg text-slate-950 md:text-white'><NavLink to="/" >Home</NavLink></li>
        <li className='hover:text-violet-600 transition text-lg text-slate-950 md:text-white'><a href='#aboutMe'>About Me</a></li>
        <li className='hover:text-violet-600 transition text-lg text-slate-950 md:text-white'><a href="#skills">Skills</a></li>
        <li className='hover:text-violet-600 transition text-lg text-slate-950 md:text-white'><a href='#projects'>Projects</a></li>
        <li className='hover:text-violet-600 transition text-lg text-slate-950 md:text-white'><a href='#contact'>Contact Me</a></li>
    </>
    return (
        <div>
           <div className="navbar max-w-screen-xl mx-auto px-4 md:px-0 bg-gray-900 dark:bg-gray-900 dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 text-white w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center text-xl"><img className='w-8 h-8' src={logo} alt="" /><span className='md:text-2xl text-xl text-white'>Ariful islam</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mr-4'>
                        <button className='text-2xl text-white mt-2' onClick={toggleTheme}>
                            {theme === "light" ? <FaMoon title='dark mode' /> : <FaSun title='light mode' />}
                        </button>
                    </div>
                    <a target='_blank' href='https://discord.com/users/1256376627701485629' className="btn rounded-none px-6 text-slate-950 text-lg">Let's chat</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;