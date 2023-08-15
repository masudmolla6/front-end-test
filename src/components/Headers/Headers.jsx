import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid'

const Headers = () => {
    return (
        <div className='flex justify-between items-center sticky top-0 h-20 bg-zinc-400 w-full sm:w-full'>
            <div>
                <BookOpenIcon className="h-20 w-32 text-blue-500" ></BookOpenIcon>
            </div>
            <div>
                <Link className='text-xl mr-8 border px-2 py-1 rounded bg-gray-500 text-white hover:bg-cyan-400' to='home'>Home</Link>
                <Link className='text-xl mr-8 border px-2 py-1 rounded bg-gray-500 text-white hover:bg-cyan-400' to='questions'>Questions</Link>
                <Link className='text-xl mr-8 border px-2 py-1 rounded bg-gray-500 text-white hover:bg-cyan-400' to='chart'>Chart</Link>
            </div>
        </div>
    );
};

export default Headers;