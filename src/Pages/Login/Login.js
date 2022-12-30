import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => { console.error(error) })
    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero" >
            <div className="hero-content flex-col lg:flex-row bg-blue-200">

                <div className='hidden lg:block'>
                    <div className="card w-96 h-80 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/06/social-media-marketing_-25-essential-apps-for-your-smartphone-60e30dab95d8b-sej.png" alt="Shoes" /></figure>
                        <div className="card-body center">
                            <h2 className="card-title text-3xl">LogIn</h2>
                            <p>Enter your valid Email and Password for LogIn.</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card flex-shrink-0 w-72 lg:w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                                <div className="btn btn-warning shadow-lg form-control mt-6" onClick={handleGoogleLogin}>
                                    <span className='flex align-baseline'>
                                        Or LogIn With Google
                                        <FaGoogle className='text-xl ml-2'></FaGoogle>
                                    </span>
                                </div>

                                <p className='text-center'>New in Social App?<Link className='text-blue-500 font-bold' to='/register'>Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default Login;