import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center gap-4'>
                <h2>404</h2>
                <Link className='border-2 rounded-xl p-2' to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;