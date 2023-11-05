// api.js
import axios from 'axios';

const fetchUserData = async () => {
    try {
        const response = await axios.get('http://localhost:8088/user/1');
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export default fetchUserData;
