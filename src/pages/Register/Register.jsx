import React, { useContext } from 'react';

import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUserEP } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;
        createUserEP(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
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
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        size="lg"
                        name="name"
                        placeholder="Your Name "
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
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