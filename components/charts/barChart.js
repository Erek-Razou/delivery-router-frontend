
import React, {useEffect, useState} from "react";
import { Bar } from "react-chartjs-2";
import {getData} from "../dataForBarChart";

const BarChart = () => {

    const [chartData,setData] = useState();

    const fetchApi = async () => {
        const chartData = await getData();
        setData(chartData);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const barChart = chartData ? (
        <Bar
            data={{
                labels:chartData.map((data) => data.name),
                datasets:[
                    {
                        data:chartData.map((data)=>data.count),
                        label:"Count",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                    }
                ],
            }}
        />
    ): null;
    return (
        <div className={"pt-500 w-[800px] h-[500px]"}>
           <div>{barChart}</div>
        </div>
    );
};

export default BarChart;