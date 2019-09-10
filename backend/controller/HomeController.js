var request = require('request');

export const home = (req, res) => {
  const url =
    'https://play.google.com/store/apps/details?id=com.bluestonesoft.soularkglobal&hl=ko&showAllReviews=true';

  request(
    {
      url: url,
      method: 'GET',
      headers: [{ Authorization: 'ApiKey myUser:verySecretAPIKey' }]
    },
    function(error, response, body) {
      if (error) throw error;
      console.log(body);
    }
  );

  res.send('test');
};
