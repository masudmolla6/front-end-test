import React from 'react';

const Topic = ({ topic }) => {
    console.log(topic);
    const { options,question,correctAnswer } = topic;
    return (
        <div>
            <div>
                <h1>{question}</h1>
            </div>
        </div>
    );
};

export default Topic;