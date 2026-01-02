import React from 'react'
import SignUpWithGoogle from '../SignUpWithGoogle/SignUpWithGoogle'
import PrimaryGradientButton from '../PrimaryGradientButton/PrimaryGradientButton'

const LoginForm = () => {
    return (
        <div className=''>
            <p className='font-semibold text-white text-xl my-5'>Log in <br />into your account</p>
            <SignUpWithGoogle />
            <p className='text-center text-xs my-8'>OR</p>
            <div className="w-full space-y-10">
                {/* Email */}
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white
               text-white placeholder-white text-sm 
               py-2 outline-none focus:border-white"
                />

                {/* Password */}
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-transparent border-b border-white
                 text-white placeholder-white  text-sm
                 py-2 outline-none focus:border-white"
                    />
                    <span className="absolute right-0 -bottom-6 text-xs text-gray-400 cursor-pointer hover:text-green-400">
                        Reset Password
                    </span>
                </div>
                   <div className='space-y-2'>
                     <PrimaryGradientButton buttonName="Login"  onClick={()=>{console.log("Login button Clicked")}}/>
                    <p>Dont have account yet?<a href="#" className='text-blue-400 font-semibold'> Signup</a></p>
                   </div>

            </div>

        </div>
    )
}

export default LoginForm