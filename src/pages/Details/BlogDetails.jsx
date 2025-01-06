import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Button } from '@material-tailwind/react';

const BlogDetails = () => {
    const { user } = useAuth();
    const { _id, email, title, imageUrl, category, shortDescription, longDescription } = useLoaderData();
    const [comments, setComments] = React.useState([]);
    const textRef = React.useRef(null);

    const handleComment = (email, id) => {
        if (textRef.current.value === '') {
            return toast.error('Comment can not be empty');
        }
        if (email === user.email) {
            return toast.error('Can not comment on own post');
        }
        const comment = {
            email: email, blog_id: id, comment: textRef.current.value, displayName: user.displayName,
            photoURL: user.photoURL
        };
        axios.post('http://localhost:5000/blogs/comments', comment)
            .then((response) => {
                toast.success('Comment Added Successfully');
            })
            .catch((error) => {
                toast.error('Failed to add comment');
            });
        textRef.current.value = '';
    }


    useEffect(() => {
        axios.get(`http://localhost:5000/blogs/comments/${_id}`)
            .then((response) => {
                setComments(response.data);
            })
    }, [comments]);
    return (
        <div className="max-w-6xl my-5 mx-auto p-4 md:p-8 bg-white shadow-md rounded-lg">
            {/* Blog Image */}
            <div className="w-full h-64 overflow-hidden rounded-lg">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Blog Category */}
            <div className="mt-4">
                <span className="text-sm font-semibold text-blue-600 uppercase">{category}</span>
            </div>

            {/* Blog Title */}
            <div className='flex justify-between items-center'>
                <h1 className="mt-2 text-3xl font-bold text-gray-800">{title}</h1>
                {
                    email === user.email && <Link to={`/update/${_id}`}><Button color="red" >Update</Button></Link>
                }
            </div>

            {/* Short Description */}
            <p className="mt-4 text-gray-600">{shortDescription}</p>

            {/* Long Description */}
            <div className="mt-6 text-gray-700 leading-relaxed">
                {longDescription}
            </div>
            <hr className='my-2' />
            <div>
                <h1 className='font-bold'>Comments</h1>
                <hr className='my-2' />
                {
                    comments.map(comment =>
                        <div key={comment._id} className='flex items-center gap-2 my-2'>
                            <img src={comment.photoURL} alt={comment.displayName} className='w-10 h-10 object-cover rounded-full' />
                            <div>
                                <h2 className='font-semibold'>{comment.displayName}</h2>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    )
                }
                <div className=''>
                    <textarea name="comment" ref={textRef} className='w-full border-2 rounded-md p-1' id="" placeholder="Can not comment Own Post"></textarea>
                    <button onClick={() => handleComment(email, _id)} className='bg-orange-500 cursor-pointer hover:bg-orange-800 text-white px-4 py-1 rounded-md mt-2'>Add Comment</button>
                </div>
            </div>
        </div>
    );

};

export default BlogDetails;