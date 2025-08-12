import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/">
            <div className='flex gap-2 items-center'>

<button className='font-bold text-2xl border-primary border-2 rounded-b-full p-2 bg-primary btn btn-primary'>F</button>
<h1 className='font-bold text-3xl'>Faysal Ahmed</h1>
                {/* <img src="https://i.ibb.co/wZXvt92q/Screenshot-2025-06-30-180334.png" alt="" /> */}
            </div>
        </Link>
    );
};

export default Logo;