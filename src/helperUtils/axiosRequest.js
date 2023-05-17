const axios = require('axios');

async function axiosPost(url, data, extraHeaders) {

    const options = {
        method: 'post',
        url: url,
        data: data,
        headers: {...{
            'Content-Type': 'application/json',
        },...extraHeaders}
    };

    axios(options)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            return error;
            console.error(error);
        });
}

async function axiosGet(url) {
    axios.get('https://api.example.com/data')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

}

module.exports = {axiosPost,axiosGet}