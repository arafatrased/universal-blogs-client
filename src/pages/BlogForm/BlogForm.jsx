import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const [blogData, setBlogData] = useState({
        title: '',
        imageUrl: '',
        category: '',
        shortDescription: '',
        longDescription: '',
    });

    const categories = ['Technology', 'Health', 'Education', 'Travel', 'Lifestyle'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        blogData.email = user.email;
        blogData.author = user.displayName || '';
        // Add your submit logic here (e.g., send data to backend)
        axios.post('https://universal-blogs-server.vercel.app/blogs', blogData)
            .then((response) => {
                toast.success('Blog Added Successfully')
                navigate('/allblogs')
            })
    };

    return (
        <div className="max-w-5xl mx-auto my-10 p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create a New <span className='text-orange-700'>Blog</span></h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block mb-1 font-medium">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={blogData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block mb-1 font-medium">Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={blogData.imageUrl}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block mb-1 font-medium">Category:</label>
                    <select
                        name="category"
                        value={blogData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    >
                        <option value="" disabled>Select Category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Short Description */}
                <div>
                    <label className="block mb-1 font-medium">Short Description:</label>
                    <textarea
                        name="shortDescription"
                        value={blogData.shortDescription}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        rows="2"
                    ></textarea>
                </div>

                {/* Long Description */}
                <div>
                    <label className="block mb-1 font-medium">Long Description:</label>
                    <textarea
                        name="longDescription"
                        value={blogData.longDescription}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        rows="5"
                    ></textarea>
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        disabled />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-700"
                >
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default BlogForm;
