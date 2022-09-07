import React from 'react';
export default function Signup(){
    return(
        <div className="Signup">
            <h1>Signup</h1>
            <div className='form1'>
                <form className='action'>
                    <label>Username</label>
                    <input type='text' placeholder='Enter Username' name='username' required></input>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' name='email' required></input>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' name='password' required></input>
                    <label>Confirm Password</label>
                    <input type='password' placeholder='Confirm Password' name='password' required></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};