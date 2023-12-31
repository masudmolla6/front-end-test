import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Topic = ({ topic,name }) => {
    console.log(topic,name);
    const { options, question, correctAnswer } = topic;

    const handleEyeIcon = () => toast(correctAnswer);



    return (
        <div className='grid grid-cols-1 mx-auto gap-5 w-4/5 border my-5 rounded py-5'>
            <div className='flex gap-5 justify-center'>
                <h1 className='text-2xl'>{question}</h1>
                <div>
                    <EyeIcon onClick={() => handleEyeIcon()} className='h-8 w-8 text-blue-500"'></EyeIcon>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 justify-center mx-auto items-center mx-auto'>
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Topic;