import React from 'react';
import BlogCard from './BlogCard';
import { Banner } from '../../components/Banner';
import Blogs from './Blogs';
import Newslater from './Newslater';

const Home = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 p-4'>
                <div className='col-span-1 md:col-span-9'>
                    <Blogs></Blogs>
                </div>
                <div className='col-span-1 md:col-span-3'>
                    <Newslater></Newslater>
                    <div>
                        <h2>Recently Posted thaslfdla sdflsakdjf </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;