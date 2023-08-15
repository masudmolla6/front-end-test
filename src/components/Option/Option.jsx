import React from 'react';

const Option = ({option}) => {
    return (
        <div className='border px-5 text-center rounded text-xl bg-cyan-300 hover:bg-fuchsia-500'>
            <button className=''>{ option}</button>
        </div>
    );
};

export default Option;