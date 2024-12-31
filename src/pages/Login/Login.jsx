import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { loginUser, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success(`Login Successfull`);
                navigate('/');
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const hangleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success(`Login Successfull`);
                navigate(location?.state || '/');
                console.log(user);
            })
            .catch(error =>{
                console.log(error);
            })
            
    }

    return (
        <div className='w-10/12 mx-auto mb-10 flex flex-col items-center justify-center mt-8'>
            <Typography variant="h4" color="blue-gray">
                Log In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Log In to authenticate your account.
            </Typography>
            <div className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                <hr className="mb-3" />
                <Button onClick={hangleGoogleLogin} type='submit' variant="outlined" className='flex items-center justify-center gap-2 bg-white text-black' fullWidth>
                    <FcGoogle /> Google Log In
                </Button>
                <hr className="mt-3" />
            </div>

            <form onSubmit={handleLogin} className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        type='email'
                        size="lg"
                        name='email'
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="lg"
                        name="password"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <Button type='submit' className="mt-6" fullWidth>
                    Log In
                </Button>

            </form>
            <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{" "}
                <Link to="/register" className="font-medium text-gray-900">
                    Register
                </Link>
            </Typography>
            <Toaster />

        </div>
    );
};

export default Login;