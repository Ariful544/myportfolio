import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='relative dark:bg-gray-900 bg-base-100'>
            <header>
                <nav className='bg-gray-900 fixed top-0 z-50 w-full   dark:bg-gray-900'>
                    <Navbar/>
                </nav>
            </header>
            <main className='min-h-screen dark:bg-gray-900'>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;