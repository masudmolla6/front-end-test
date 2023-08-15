import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const handleBtn = () => {
        toast('hello');
    }
    return (
        <div>
            <h1>This is home page.</h1>
            <button onClick={() => handleBtn()}>Click me</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;