const axios = require('axios');
const https = require('https')

class ApiRequest {
    async get(path, realm) {
        try {
            let apiUrl;
            if(realm == 'ru') {
                apiUrl = 'https://papi.tanksblitz.ru/wotb/';
            } else {
                apiUrl = `https://api.wotblitz.${realm}/wotb/`
            }
            let req = await axios({method: 'get', url: apiUrl + path, timeout: 60000, httpsAgent: new https.Agent({ keepAlive: true })});
            /*if(req.data.status == 'ok') return req.data;
            else if(req.data.status == 'error') {
                let err = Error(`API error ${req.data.error.code}: ${req.data.error.message} in field '${req.data.error.field}' and value '${req.data.error.value}'`)
                console.error(err)
            }*/
            return req.data;
        }
        catch(err) {
            console.error(err);
        }
    }
    async post(path, realm, post) {
        try {
            let apiUrl;
            if(realm == 'ru') {
                apiUrl = 'https://papi.tanksblitz.ru/wotb/';
            } else {
                apiUrl = `https://api.wotblitz.${realm}/wotb/`
            }
            let req = await axios({method: 'post', url: apiUrl + path, data: post, timeout: 60000, httpsAgent: new https.Agent({ keepAlive: true })});
            /*if(req.data.status == 'ok') return req.data;
            else if(req.data.status == 'error') {
                let err = Error(`API error ${req.data.error.code}: ${req.data.error.message} in field '${req.data.error.field}' and value '${req.data.error.value}'`)
                console.error(err)
            }*/
            return req.data;
        }
        catch(err) {
            console.error(err);
        }
    }
}

module.exports = ApiRequest;