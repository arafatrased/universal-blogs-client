import axios from 'axios';
import React, { useEffect } from 'react';
import { use } from 'react';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [allblogs, setAllBlogs] = React.useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allblogs')
            .then(res => {
                setAllBlogs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='w-11/12 mx-auto my-4'>
            <h2 className='text-center text-3xl font-bold mb-4'>All <span className='text-orange-800'>Blogs</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {allblogs.map((blog) => (
                    <div key={blog._id} className='border p-4 rounded-lg shadow-md'>
                        <img src={blog.imageUrl} alt={blog.title} className='w-full h-48 object-cover rounded-md' />
                        <h2 className='text-xl font-bold my-2'>{blog.title}</h2>
                        <div className='my-2'>
                            <span className='text-sm mr-2 text-gray-500 ml-2'>Author: {blog?.author || 'N/A'}</span>
                            <span className='text-sm text-gray-800 rounded-md p-1 bg-orange-100'>{blog.category}</span>
                        </div>
                        <p className='text-gray-500'>{blog.shortDescription}...</p>
                        <div className='flex justify-between items-center mt-4'>
                            <Link to={`/details/${blog._id}`} className='bg-orange-500 text-white px-4 py-1 rounded-md mt-2'>Details</Link>
                            <Link className="text-red-500 hover:text-red-600 transition-colors text-xl">
                                ❤️
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBlogs;