import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
    const [recents, setRecents] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recent')
            .then(res => {
                setRecents(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className='border p-4 rounded-lg shadow-md my-3'>
            <h1 className='text-xl my-2'>Recent <span className='text-orange-700'>Posts</span></h1>
            {
                recents.map((recent) => (
                    <Link to={`/details/${recent._id}`} key={recent._id}>
                        <div className='border mt-2 p-4 rounded-lg space-y-1 shadow-md cursor-pointer'>
                            <img className='w-full h-28 object-cover rounded-lg ' src={recent.imageUrl} alt="" />
                            <h1 className='text-sm md:text-md lg:text-lg font-semibold'>{recent.title}</h1>
                            <p className='text-[0.8rem] md:text-sm'>Author: Arafat Hossen Rased</p>
                            <div>
                                <p className='inline rounded-md p-1 bg-orange-100'>Education</p>
                            </div>

                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default RecentPosts;