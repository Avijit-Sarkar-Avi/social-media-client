import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const userImage = form.userImage.value;
        const university = form.university.value;
        const address = form.address.value;
        const email = form.email.value;
        const password = form.password.value;
    }


    const handleGoogleRegister = () => {

    }


    return (
        <div className="card flex-shrink-0 w-72 md:w-1/2 mb-10 shadow-2xl bg-blue-400 mx-auto">
            <h2 className='text-2xl mx-auto mt-6'>Register Here</h2>
            <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl">Photo URL</span>
                    </label>
                    <input type="text" name='userImage' placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl">University</span>
                    </label>
                    <input type="text" name='university' placeholder="University Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl">Address</span>
                    </label>
                    <input type="text" name='address' placeholder="Your Address" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-xl">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>

                </div>

                <div className="btn btn-warning shadow-lg"
                    onClick={handleGoogleRegister}>
                    <span className='flex align-baseline'>
                        Or Register With Google
                        <FaGoogle className='text-xl ml-2'></FaGoogle>
                    </span>
                </div>

                <p className='text-center'>Already have an account? Click <Link className='text-white font-bold' to='/login'>LogIn</Link> </p>
            </form>
        </div>
    );
};

export default Register;