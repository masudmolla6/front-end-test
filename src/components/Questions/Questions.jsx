import React from 'react';

const questions = () => {
    return (
        <div>
            <h1 className='text-3xl text-center my-2'>what is the purpose of react router?</h1>
            <p className='text-xl text-center my-2'>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>

            <h1 className='text-3xl text-center my-2'>how does context  api  work?</h1>
            <p className='text-xl text-center my-2'>How the Context API Works. Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.</p>

            <h1 className='text-3xl text-center my-2'>React useRef Hook.</h1>
            <p className='text-xl text-center my-2'>
                The useRef Hook allows you to persist values between renders.

                It can be used to store a mutable value that does not cause a re-render when updated.

                It can be used to access a DOM element directly</p>
        </div>
    );
};

export default questions;