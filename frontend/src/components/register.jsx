import { useState } from 'react'; // Hook
// https://getbootstrap.com/docs/5.3/utilities/sizing/
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {  // Functional React component
    // Variables...
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {  // Use axios
        e.preventDefault();

        setMsg('');
        // Simple client-side validation
        if (!name || !email || !pass) {
            setMsg('Fill-in all fields');
            return;
        }

        // axios.post('http://localhost:3001/register', { name, email, pass })
        axios.post('https://jede-login-backend.vercel.app/register', { name, email, pass })
        .then(result => { console.log(result)
            if (result.data === 'Success!') {
                console.log(result.data);
                setMsg('Registration successful! Redirecting...');
                setTimeout(() => {
                    navigate('/login');
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
        <div className='d-flex flex-column justify-content-center align-items-center bg-light-subtle vh-100 p-3'>
            <div className='w-25 p-3 shadow'>
                <h2 className='text-center'>Register</h2>
                <form onSubmit={ handleSubmit } action="">
                    <div className='mb-3'>  {/* mb- margin-bottom */}
                        <label htmlFor="email">
                            <h5>Name</h5>
                        </label>
                        <input type="text"
                            placeholder='Enter Name...'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={ (e) => setName(e.target.value) }
                        />
                    </div>
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
                    <button type='submit' className='btn btn-dark w-100 rounded-0 mb-3'>Register</button>
                </form>
                <p>Already have an account?</p>
                <Link to='/login' className='btn border w-100 bg-light rounded-0 text-decoration-none'>Log In</Link>
            </div>

            {/* Display Msg */}
            <div style={{ minHeight: '4rem' }}>
                {msg && <p className='text-center mt-3'>{msg}</p>}
            </div>
        </div>
    );
}

export default Register;