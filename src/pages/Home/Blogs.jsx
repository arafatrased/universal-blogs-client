import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import useAuth from '../../hooks/useAuth';

const Blogs = () => {
    const [blogs, setBlogs] = React.useState([]);
    const { user } = useAuth();

    const handleWishList = (blog) => {
        const { _id, title, imageUrl, author, category, shortDescription } = blog;
        const wishedBlog = { wish_id: _id, email: user.email, title, imageUrl, author, category, shortDescription };
        axios.post('http://localhost:5000/wishlist', wishedBlog)
            .then((response) => {
                if (response.data.insertedId) {
                    toast.success('Blog added to wishlist!');
                }
                else {
                    toast.error('Already added to wishlist');
                }
            })
            .catch((error) => {
                toast.error('Failed to add to wishlist');
            });
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
                    <p className='text-gray-500'>{blog.shortDescription.substring(0, 150)}...</p>
                    <div className='flex justify-between items-center mt-4'>
                        <Link to={`/details/${blog._id}`} className='bg-orange-500 text-white px-4 py-1 rounded-md mt-2'>Details</Link>
                        {
                            user && <button onClick={() => handleWishList(blog)} className="text-red-500 hover:text-red-600 transition-colors text-xl">
                                <BsHeart />
                            </button>
                        }



                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;