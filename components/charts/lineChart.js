import React, {useEffect, useState} from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {getData} from "../data"
import {Title} from "chart.js";

//const labels = ["January", "February", "March", "April", "May", "June"];

// const data = {
//     labels: labels,
//     datasets: [
//         {
//             label: "My First dataset",
//             backgroundColor: "rgb(255, 99, 132)",
//             borderColor: "rgb(255, 99, 132)",
//             data: [0, 10, 5, 2, 20, 30, 45],
//         },
//     ],
// };

const LineChart = () => {

    const [chartData,setData] = useState();

    const fetchApi = async () => {
        const chartData = await getData();
        setData(chartData);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const lineChart = chartData ? (
        <Line
            data={{
                labels: chartData.map((data)=> data.title),
                datasets: [
                    {
                        data: chartData.map((data) => data.salary),
                        label: "Salary",
                        borderColor: "rgb(0, 217, 255)",
                        fill: true,
                    }
                ],
            }}
        />
    ) : null;
    return (
        <div className={"ml-500 w-[800px] h-[500px]"}>
            <div>{lineChart}</div>
        </div>
    );
};

export default LineChart;