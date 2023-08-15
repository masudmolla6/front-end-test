import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Option = ({ option, correctAnswer }) => {
    const handleAnsBtn = () => {
        if (option === correctAnswer) {
            toast('Your Ans is Right');
        }
        else {
            toast('Your Ans is Wrong');
        }
    }
    return (
        <div className='border px-5 text-center rounded text-xl bg-cyan-300 hover:bg-fuchsia-500'>
            <button onClick={() => handleAnsBtn()}>{option}</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;