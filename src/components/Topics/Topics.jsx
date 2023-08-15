import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const allTopics = useLoaderData();
    // console.log(allTopics.data.name);
    const name = allTopics.data.name;
    const topics = allTopics.data.questions;
    console.log(topics)
    return (
        <div>
            <h1 className='text-center text-3xl'>Quiz Of { name}</h1>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;