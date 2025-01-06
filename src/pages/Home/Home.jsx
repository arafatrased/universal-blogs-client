import React from 'react';
import { Banner } from '../../components/Banner';
import Blogs from './Blogs';
import Newslater from './Newslater';
import RecentPosts from '../../components/RecentPosts';
import { motion } from "motion/react"

const Home = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 p-4'>
                <div className='col-span-1 md:col-span-9'>
                    <motion.h2
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: "easeOut", repeat: Infinity }}

                        className='text-center text-3xl font-bold mb-4'>Recent <motion.span
                            animate={{ color: [ 'orange'] }}
                            transition={{ duration: 2, delay: 2, ease: "easeInOut", repeat: Infinity }}
                            className='text-orange-800'>Posts</motion.span></motion.h2>
                    <Blogs></Blogs>
                </div>
                <div className='col-span-1 md:col-span-3'>
                    <Newslater></Newslater>
                    <RecentPosts></RecentPosts>
                </div>
            </div>
        </div>
    );
};

export default Home;