import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'React',
            totall:8
        },
        {
            name: 'Javascript',
            totall:9
        },
        {
            name: 'Css',
            totall:8
        },
        {
            name: 'Git',
            totall:11
        },
    ]

    return (
        <div className='flex justify-center'>
            <BarChart width={500}  height={500} data={data}>
                <Bar dataKey="totall"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="totall"></YAxis>
            </BarChart>
        </div>
    );
};

export default Chart;