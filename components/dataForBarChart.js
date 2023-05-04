import axios from 'axios';


const url = "http://localhost:8080/api/v1/name-count"
export const getData = async () => {
    try {
        const { data } = await axios.get(url);
        const modifiedData = data.map((data) => ({
            name: data.name,
            count: data.count
        }));
        return modifiedData;
    } catch (err) {
        console.log(err);
    }
};