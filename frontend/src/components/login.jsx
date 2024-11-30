import { useState } from 'react';
// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {  // Functional React component
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {  // Use axios
        e.preventDefault();
        
        setMsg('');
        // Simple client-side validation
        if (!email || !pass) {
            setMsg('Fill-in all fields');
            return;
        }

        axios.post('http://localhost:3001/login', { email, pass })
        // axios.post('https://login-jede.vercel.app/login', { email, pass })
        .then(result => {
            if (result.data === 'Success!') {
                console.log(result.data);
                setMsg('Login successful! Redirecting...');
                setTimeout(() => {
                    navigate('/home');
                }, 1000);  // Redirect after 1s
            }
        })
        .catch(err => {
            if (err.response) {
                setMsg(err.response.data);  // Display err msg from server/backend
            }
            else {
                setMsg('An error occured. Try again later');  // For network/other errors
            }
        });
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light-subtle vh-100 p-3'>  {/* bg-secondary- usually light gray*/}
            {/* <div className='w-25 p-3 border border-top-0 border-black border-5 border-success style="--bs-border-opacity: .5;"'>  p-padding, m, w, h, vw, vh */}
            <div className='w-25 p-3 shadow'>
                <h2 className='text-center'>Log In</h2>
                <form onSubmit={ handleSubmit } action="">
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <h5>Email</h5>
                        </label>
                        <input type="email"
                            placeholder='Enter Email...'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <h5>Password</h5>
                        </label>
                        <input type="password"
                            placeholder='Enter Password...'
                            name='password'
                            className='form-control rounded-0'
                            onChange={ (e) => setPass(e.target.value) }
                        />
                    </div>
                    <button type='submit' className='btn btn-dark w-100 rounded-0 mb-3'>Log In</button>
                </form>
                <p>Don&apos;t have an account yet?</p>
                <Link to='/register' className='btn border w-100 bg-light rounded-0 text-decoration-none'>Register</Link>
            </div>

            {/* Display Msg */}
            <div style={{ minHeight: '4rem' }}>
                {msg && <p className='text-center mt-3'>{msg}</p>}
            </div>
        </div>
    );
}

export default Login;