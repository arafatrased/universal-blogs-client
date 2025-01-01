import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = React.useState([]);
    
    const handleWishList = () => {
        console.log('Added to wishlist');
    }

    React.useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data);
            })
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {blogs.map((blog) => (
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
                        <button onClick={handleWishList} className="text-red-500 hover:text-red-600 transition-colors text-xl">
                            ❤️
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;