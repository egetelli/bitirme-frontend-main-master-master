import Navbar from './Navbar'
import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import { Link } from 'react-router-dom';
import { getAddress } from 'ethers/lib/utils';


let email ="";


export const getEmail = ()=> {
    return email;
}
export const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    
    
    const login = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem('email', email)
        console.log(localStorage.getItem('email'))
        localStorage.setItem('token-info', JSON.stringify(userData));


    };


    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };
    return (
        <>
            <div>
                <Navbar />
                <ParticlesBg type="thick" bg={true} />
                <div class="App">
                    <div className="auth-form-container">
                        <h2 class="font-bold text-2xl" >Login</h2>
                        {!isLoggedin ? (
                            <>
                                <form action="" className="login-form">
                                    <label class="font-bold" htmlFor="name">Name</label>
                                    <input
                                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        placeholder=" Name"
                                    />
                                    <label class="font-bold" htmlFor="email">Email</label>

                                    <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                        type="email"
                                        onChange={(e) =>{setEmail(e.target.value)} }
                                        value={email}
                                        placeholder="youremail@gmail.com"
                                        id='email'
                                        name='email'
                                    />
                                    <label class="font-bold" htmlFor="password">Password</label>

                                    <input
                                        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        placeholder="********"
                                    />
                                    
                                    {isLoggedin ? <Link to="/profile"></Link>: <button type="submit" onClick={login} className="rounded-lg mt-3 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        Log-In
                                    </button> }
                                </form>
                            </>
                        ) : (
                            <>
                                <h1>User is logged in</h1>
                                <button onClickCapture={logout}>logout user</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login