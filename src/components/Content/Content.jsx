import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Content = () => {
    const allTopics = useLoaderData();
    const topics = allTopics.data;
    console.log(topics);
    return (
        <div>
            <h1 className='text-5xl text-center text-blue-400 italic'>Check YourSelf</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2 mx-20 mt-4'>
            {
                topics.map(subject => <Subject
                    key={subject.id}
                    subject={subject}
                ></Subject>)
            }
            </div>
        </div>
    );
};

export default Content;