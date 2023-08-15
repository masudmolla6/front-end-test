import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';

const Chart = () => {
    const allData= useLoaderData();
    const allTopics = allData.data;
    return (
        <div>
            <h1>This is Chart page.</h1>
            {
                allTopics.map(chartData => <Rechart
                    key={chartData.id}
                    chartData={chartData}
                ></Rechart>)
            }
        </div>
    );
};

export default Chart;