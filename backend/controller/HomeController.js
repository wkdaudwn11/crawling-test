var request = require('request');
const client = require('cheerio-httpcli');

export const home = (req, res) => {
  const url =
    'https://play.google.com/store/apps/details?id=com.bluestonesoft.soularkglobal&hl=ko&showAllReviews=false';

  request(
    {
      url: url,
      method: 'GET',
      headers: [{ Authorization: 'ApiKey myUser:verySecretAPIKey' }]
    },
    function(error, response, body) {
      if (error) throw error;
      console.log(JSON.stringify(response));
    }
  );

  res.send('home');
};

export const home2 = (req, res) => {
  let url =
    'https://play.google.com/store/apps/details?id=com.bluestonesoft.soularkglobal&hl=ko';

  var param = {};
  client.fetch(url, param, function(err, $, res) {
    if (err) {
      console.log(err);
      return;
    }
    $('.fle8Af').each(function(post) {
      console.log($(this).text());
    });
    console.log('test');
  });

  https: res.send('home2');
};
