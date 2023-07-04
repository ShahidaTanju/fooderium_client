import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import nullProfilePic from '../Assets/null-profile-pic.webp';
import useUploadingImage from '../hooks/useUploadingImage';

const SignUp = () => {


    const inputRef = useRef();

    const [uploadingImage, setUploadingImage] = useState(null);

    useUploadingImage(uploadingImage);

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <form className=" py-20 w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Create to your account</h2>
                    <div className="my-6 space-y-4">
                        <div onClick={() => inputRef.current.click()} className="avatar cursor-pointer">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={nullProfilePic} alt="Profile Pic" />
                            </div>
                        </div>
                        <input onChange={(event) => setUploadingImage(event.target.value)} ref={inputRef} className="hidden" type="file"></input>
                        <div className="space-y-2">
                            <label for="user name" className="block text-sm text-start">User Name</label>
                            <input type="text" name="name" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-400" />


                        <hr className="w-full dark:text-gray-400" />
                    </div>
                    <div novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">

                            <div className="space-y-2">
                                <label for="email" className="block text-sm text-start">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label for="password" className="text-sm">Password</label>

                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label for="cPassword" className="text-sm">Confirm Password</label>

                                </div>
                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            </div>
                        </div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                    </div>
                    <Link to={"/login"} className="text-xs hover:underline dark:text-gray-400">Already have an account? Log In</Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;