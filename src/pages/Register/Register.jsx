import React, { useContext } from 'react';

import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUserEP, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value;
        if (!/^.{6,}$/.test(password)) {
            toast.error("Password must be at least 6 characters long.");
        }
        if (!/.*[A-Z].*/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
        }
        if (!/.*[!@#$%^&*(),.?":{}|<>].*/.test(password)) {
            toast.error("Password must contain at least one special character.");
        }
        if (!/.*[0-9].*/.test(password)) {
            toast.error("Password must contain at least one numeric character.");
        }
        createUserEP(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, { displayName: displayName, photoURL: photoURL })
                    .then(() => {
                        toast.success('User Successfully Created');
                        logOut();
                        navigate('/login');
                    })
            })
            .catch(error => {
                toast.error(error);
            })



    }
    return (
        <div className='w-10/12 mx-auto flex flex-col items-center justify-center mt-8'>
            <Typography variant="h4" color="blue-gray">
                Register
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Register to enjoy and share your thoughts with us.
            </Typography>
            <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-3">
                    <Typography variant="h6" color="blue-gray" className="-mb-1">
                        Your Name
                    </Typography>
                    <Input
                        size="lg"
                        name="name"
                        type='text'
                        placeholder="Your Name "
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-1">
                        Your Photo URL
                    </Typography>
                    <Input
                        size="lg"
                        name="photoURL"
                        type='text'
                        placeholder="Photo URL"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-1">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        name='email'
                        type='email'
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        required
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-1">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        name="password"
                        placeholder="********"
                        required
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <Button type="submit" className="mt-6" fullWidth>
                    Register
                </Button>

            </form>
            <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-gray-900">
                    Log In
                </Link>
            </Typography>

        </div>
    );
};

export default Register;