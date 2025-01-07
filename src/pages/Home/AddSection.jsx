import React from 'react';
import { Link } from 'react-router-dom';

const AddSection = () => {
    return (
        <div className='border p-4 rounded-lg shadow-md my-3'>
            <h1 className='text-xl my-2'>Place <span className='text-orange-700'>Adds</span></h1>
            <Link>
                <div className='border mt-2 p-4 rounded-lg space-y-1 shadow-md cursor-pointer'>
                    <img className='w-full h-64 object-cover rounded-lg ' src="https://i.ibb.co.com/sgD9WH3/Smart-Home-Tech.jpg" alt="" />
                    
                    
                    <div>
                        <p className='inline rounded-md p-1 '>Place Your Add Here</p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default AddSection;