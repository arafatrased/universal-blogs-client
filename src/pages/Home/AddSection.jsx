import React from 'react';
import { Link } from 'react-router-dom';

const AddSection = () => {
    return (
        <div className='border p-4 rounded-lg shadow-md my-3'>
            <h1 className='text-xl my-2'>Top <span className='text-orange-700'>Posts</span></h1>
            <Link>
                <div className='border mt-2 p-4 rounded-lg space-y-1 shadow-md cursor-pointer'>
                    <img className='w-full h-64 object-cover rounded-lg ' src="" alt="" />
                    <h1 className='text-sm md:text-md lg:text-lg font-semibold'>Add Section</h1>
                    
                    <div>
                        <p className='inline rounded-md p-1 '>Place Your Add Here</p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default AddSection;