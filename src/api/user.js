var raw = "";

var requestOptions = {
    method: 'GET',
    body: raw,
    redirect: 'follow'
};
async function getHeartRate() {
    const response = await fetch("http://localhost:8088/heart_rate/16", requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
}

export default getHeartRate;
