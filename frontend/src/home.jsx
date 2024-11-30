// import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <Link to='/login' className='text-decoration-none'><h1 className='text-black'>Home</h1></Link>
    )
}

export default Home;