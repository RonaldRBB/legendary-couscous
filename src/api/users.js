// api.js
import axios from 'axios';

const fetchUserData = async () => {
    try {
        const response = await axios.get('http://localhost:8088/user/1');
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

export default fetchUserData;
