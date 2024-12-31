import React from 'react';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Newslater = () => {
    const { user } = useAuth();
    const emailRef = React.useRef(null);
    const handleSubscribe = () => {
        const email = emailRef.current.value;
        if (!email) {
            return toast.error('Please enter your email');
        }
        if (!user) {
            return toast.error('Please login to subscribe to our newsletter');
        }
        toast.success('Thank you for subscribing to our newsletter');
        emailRef.current.value = '';

    }
    return (
        <div className=" p-4 bg-gray-100 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-4">Get the latest updates delivered straight to your inbox.</p>
            <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-md w-2/3"
            />
            <button
                onClick={handleSubscribe}
                className="ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Subscribe
            </button>
        </div>
    );
};

export default Newslater;