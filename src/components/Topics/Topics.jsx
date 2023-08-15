import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const allTopics = useLoaderData();
    const topics = allTopics.data.questions;
    console.log(topics)
    return (
        <div>
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