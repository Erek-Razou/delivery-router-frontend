import axios from 'axios';
import {useEffect, useState} from "react";


const url = "http://localhost:8080/api/v1/employers/salaries"
export const getData = async () => {
    try {
        const { data } = await axios.get(url);
        const modifiedData = data.map((data) => ({
            salary: data[0],
            title: data[1]
        }));
        return modifiedData;
    } catch (err) {
        console.log(err);
    }
};
