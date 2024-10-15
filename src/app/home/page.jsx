import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div>
           <h1>this is home page.........</h1> 
           <Link href={'/about'}>about</Link>
        </div>
    );
};

export default HomePage;