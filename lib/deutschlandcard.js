const axios = require('axios').default;


async function retrieve(birthday, post, number) {
  const authResponse = await axios.get('https://ws.deutschlandcard.de/dlc-integration/v1/members/'+number, 
    {
      withCredentials: true, // If true, send cookie stored in jar
      headers: {
        'user-agent': 'DeutschlandCard/1.8.0 (iPhone; iOS 11.4.1; Scale/3.00',
        'x-api-token': 'hpu0LkmBnpTbJeBVukLFvA==' 
      },
      auth:{
        user: number,
        pass: birthday+'|'+post
      },
      json: true
    }
  );
  console.log(response);
  
  const pointResponse = await axios.get('https://ws.deutschlandcard.de/dlc-integration/v1/members/'+number+'/points', 
    {
      withCredentials: true, // If true, send cookie stored in jar
      headers: {
        'user-agent': 'DeutschlandCard/1.8.0 (iPhone; iOS 11.4.1; Scale/3.00',
        'x-api-token': 'hpu0LkmBnpTbJeBVukLFvA==',
        'x-auth-token': 'token - nerede?' 
      },
    }
  );
  return pointsResponse.data;
}

retrieve('1998-06-24','54362','1234513523')

exports = { retrieve };
