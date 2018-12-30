const axios = require('axios').default;


async function retrieve(number, password) {
  const authResponse = await axios.post('https://services-ext.payback.de/138/v1/json/authenticate', 
    {
      'consumerIdentification':{
        'consumerAuthentication':{
          'credential':'uRMcEj6wPRZp69LU', 
          'principal':'138'
        }
      },
      'authentication':{
        'identification':{
          'alias': number,
          'aliasType': 1
        },
        'security':{
          'secret': password,
          'secretType': 3
        }
      }
    },
    {
      withCredentials: true, // If true, send cookie stored in jar
      headers: {
        'accept':'application/json; charset=utf-8',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-us',
        'authorization': 'Basic aW9zYXBwX2Rl0jRjREJHY3p0dEZUZ1ZoRGc=',
        'content-type': 'application/json; charset=utf-8',
        'user-agent': 'DSA/18.12.10200(1543852733) iOS/11.4.1' 
      },
    }
  );
  console.log(response)
  
  const pointResponse = await axios.post('https://services-ext.payback.de/138/v1/json/getaccountbalance', 
    {
      'consumerIdentification':{
        'consumerAuthentication':{
          'credential':'uRMcEj6wPRZp69LU', 
          'principal':'138'
        }
      },
      'authentication':{
        'token':'token - nerede?'
      }
    },
    {
      withCredentials: true, // If true, send cookie stored in jar
      headers: {
        'accept':'application/json; charset=utf-8',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-us',
        'authorization': 'Basic aW9zYXBwX2Rl0jRjREJHY3p0dEZUZ1ZoRGc=',
        'content-type': 'application/json; charset=utf-8',
        'user-agent': 'DSA/18.12.10200(1543852733) iOS/11.4.1' 
      },
    }
  );
  return pointsResponse.data;
}

retrieve('123123123','123')

exports = { retrieve };
