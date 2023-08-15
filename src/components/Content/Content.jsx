import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Content = () => {
    const allTopics = useLoaderData();
    const topics = allTopics.data;
    console.log(topics);
    return (
        <div className='grid grid-cols-3 gap-2 mx-20 mt-4'>
            {
                topics.map(subject => <Subject
                    key={subject.id}
                    subject={subject}
                ></Subject>)
            }
        </div>
    );
};

export default Content;