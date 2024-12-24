import React, { useContext } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='w-10/12 mx-auto flex flex-col items-center justify-center mt-8'>
            <Typography variant="h4" color="blue-gray">
                Log In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Log In to authenticate your account.
            </Typography>
            <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
                    <Link  to="/register" className="font-medium text-gray-900">
                       Register
                    </Link>
            </Typography>

        </div>
    );
};

export default Login;