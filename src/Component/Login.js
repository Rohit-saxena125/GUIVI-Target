import React from 'react';
export default function Login(){
    return(
        <div className="Login">
            <h1>Login</h1>
            <div className='form1'>
                <form className='action'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter E-mail' name='E-mail' required></input>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' name='password' required></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}