import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <div className='bg-gray-200 p-4'>
                <h2>Blog 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.</p>
            </div>
            <div className='bg-gray-200 p-4'>
                <h2>Blog 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.</p>
            </div>
            <div className='bg-gray-200 p-4'>
                <h2>Blog 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.</p>
            </div>
            <div className='bg-gray-200 p-4'>
                <h2>Blog 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.</p>
            </div>
        </div>
    );
};

export default Blogs;