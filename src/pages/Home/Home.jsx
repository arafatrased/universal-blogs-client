import React from 'react';
import { Banner } from '../../components/Banner';
import Blogs from './Blogs';
import Newslater from './Newslater';
import RecentPosts from '../../components/RecentPosts';

const Home = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 p-4'>
                <div className='col-span-1 md:col-span-9'>
                <h2 className='text-center text-3xl font-bold mb-4'>Recent <span className='text-orange-800'>Posts</span></h2>
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