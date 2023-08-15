import React from 'react';
import { useNavigate } from 'react-router-dom';

const Subject = ({ subject }) => {
    const { name, id, logo,total} = subject;
    console.log(subject);

    const navigate = useNavigate();

    const quizBtn = () => {
        navigate(`/quiz/${id}`)
    }

    return (
        <div className='border rounded'>
            <img className='bg-gray-400 h-96 w-full' src={logo} alt="" />
            <div className='flex justify-between mx-3 my-2'>
                <h2 className='text-xl'>{name}</h2>
                <h2 className='text-xl'>Quiz: { total}</h2>
                <button className='border bg-blue-400 rounded text-xl px-3 py-1 text-white hover:bg-gray-400' onClick={()=>quizBtn()}>Take Quiz</button>
            </div>
        </div>
    );
};

export default Subject;