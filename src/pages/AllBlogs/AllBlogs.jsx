import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [allblogs, setAllBlogs] = React.useState([]);
    const searchRef = React.useRef(null);

    useEffect(() => {
        axios.get('http://localhost:5000/allblogs')
            .then(res => {
                setAllBlogs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const handleSearch = () => {
        const searchValue = searchRef.current.value;
        axios.get(`http://localhost:5000/allblogs?search=${searchValue}`)
            .then(res => {
                setAllBlogs(res.data)
            })
            .catch(err => {
                toast.error(err);
            })
    }
    const handleWishList = (blog) => {
        const { _id, title, imageUrl, author, category, shortDescription } = blog;
        const wishedBlog = { wish_id: _id, title, imageUrl, author, category, shortDescription };
        axios.post('http://localhost:5000/wishlist', wishedBlog)
            .then((response) => {
                if (response.data.insertedId) {
                    toast.success('Blog added to wishlist!');
                }
                else {
                    toast.error('Failed to add to wishlist');
                }
            })
            .catch((error) => {
                toast.error('Failed to add to wishlist');
            });
    }

    return (
        <div className='w-11/12 mx-auto my-4'>
            <h2 className='text-center text-3xl font-bold mb-4'>All <span className='text-orange-800'>Blogs</span></h2>
            <div className='w-8/12 mx-auto flex justify-between gap-2 my-4'>

                <div className='w-full relative'>
                    <input ref={searchRef} type='text' placeholder='write blog title to search' className='border border-[#e5eaf2] py-3 pr-4 pl-[120px] outline-none w-full rounded-md' />

                    <span className='bg-gray-300 text-gray-500 text-[1rem] absolute top-0 left-0 h-full px-3 flex items-center justify-center rounded-l-md'>Search Here</span>
                </div>
                <Button onClick={handleSearch} variant='outlined'>Search</Button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {allblogs.map((blog) => (
                    <div key={blog._id} className='border p-4 rounded-lg shadow-md'>
                        <img src={blog.imageUrl} alt={blog.title} className='w-full h-48 object-cover rounded-md' />
                        <h2 className='text-xl font-bold my-2'>{blog.title}</h2>
                        <div className='my-2'>
                            <span className='text-sm mr-2 text-gray-500 ml-2'>Author: {blog?.author || 'N/A'}</span>
                            <span className='text-sm text-gray-800 rounded-md p-1 bg-orange-100'>{blog.category}</span>
                        </div>
                        <p className='text-gray-500'>{blog.shortDescription.substring(0, 80)}...</p>
                        <div className='flex justify-between items-center mt-4'>
                            <Link to={`/details/${blog._id}`} className='bg-orange-500 text-white px-4 py-1 rounded-md mt-2'>Details</Link>
                            <Link onClick={() => handleWishList(blog)} className="text-red-500 hover:text-red-600 transition-colors text-xl">
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