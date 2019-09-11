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
    'https://play.google.com/store/apps/details?id=com.bluestonesoft.soularkglobal&hl=ko&showAllReviews=false';

  var param = {};

  client.fetch(url, param, function(err, $, res) {
    if (err) {
      console.log(err);
      return;
    }

    $('.BHMmbe').each(function(post) {
      console.log('별점: ' + $(this).text());
    });

    $('.EymY4b span:nth-child(2)').each(function(post) {
      console.log('총 리뷰수: ' + $(this).text());
    });

    //
    $('body').each(function(post) {
      //console.log(typeof $(this).text()); // String
      //console.log(JSON.stringify($(this).text()));
    });

    console.log('End');
  });

  res.send('home2');
};

export const home3 = (req, res) => {
  var headers = {
    'sec-fetch-mode': 'cors',
    'x-same-domain': '1',
    origin: 'https://play.google.com',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    cookie:
      'CONSENT=YES+KR.ko+20170723-09-1; OGPC=19013527-1:; OGP=-19013527:; SEARCH_SAMESITE=CgQI1I0B; _ga=GA1.3.1697221550.1567501275; OTZ=5086621_20_20__20_; SID=oAfKZEhfd6VtP4klOEWfVX1Y18Ub5u3ejbFmF55qOw11IwkryfU5cR4rkhxVA0urv-S41Q.; HSID=AinzxlnVW1S6HBKN_; SSID=AFscn9sfg2TgIjjiK; APISID=Cyv94prnjJdwwvMf/AV19l2nbk2PcAWjjh; SAPISID=XCGGP_UpXgZBayqS/AVKlKqyBVK4USwVNp; ANID=AHWqTUmc925Ivup7JzoTCbG5AKIT2IFst3ybesXK2wWOJxsU-lvZfRhzsXmnhyG1; PLAY_ACTIVE_ACCOUNT=ICrt_XL61NBE_S0rhk8RpG0k65e0XwQVdDlvB6kxiQ8=wkdaudwn1028@gmail.com; _gid=GA1.3.1705888601.1568021248; _gac_UA-19995903-1=1.1568080010.EAIaIQobChMIhd-6pJHF5AIV2YRwCh3gQgkdEAAYASAAEgLx1_D_BwE; NID=188=Kjwww_xAGRnEPmQL4cfKBVMYj-EuNH3ucjEWXBqM3FacRmycgKvDGN4JePqX8vcuh1sj_mRgERXRLU94npA4_M7sJKXuNaP122wj6r-rD5GTWZVBHDMMud0qu_nxZjdkWTerXI-ruZJGBnpyZ8YC56ChoiE6ljwre8ssGGL_7UvDwbm-0q9Rmw69bM8kIv_lzeZIBaIKcdGiR_RQIw; 1P_JAR=2019-9-10-6; _gat_UA199959031=1; SIDCC=AN0-TYtYZRZC1F5UjHlFIOFGchQiTWWdxdAoxhgRuoqc682X6x2wNTHP7ovVwH0eNusKuUV6-A',
    'x-client-data':
      'CJK2yQEIpLbJAQjBtskBCKmdygEIqKPKAQjiqMoBCLiqygEIl63KAQjNrcoBCMyuygEIyq/KARj3sMoB',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    accept: '*/*',
    referer: 'https://play.google.com/',
    authority: 'play.google.com',
    'sec-fetch-site': 'same-origin'
  };

  var dataString =
    'f.req=%5B%5B%5B%22UsvDTd%22%2C%22%5Bnull%2Cnull%2C%5B2%2Cnull%2C%5B40%2Cnull%2C%5C%22CpMBCpABKm4KOvc7msxJ__KwgZielp7Fz8_Pz8_Pys7HzMqdns7KxsXOxYmSxc7Ly8nJysrKxs7GxsbLzs3HysvI__4QKCFtgTa2o-RR0zEphUaeuHY15Dl-Tw0AtjNlxFAAWgsJgmF9fcPmtNYQA2CEn_ubBzIeChwKGmFuZHJvaWRfaGVscGZ1bG5lc3NfcXNjb3Jl%5C%22%5D%2Cnull%2C%5B%5D%5D%2C%5B%5C%22com.bluestonesoft.soularkglobal%5C%22%2C7%5D%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&at=AK6RGVbPgMedq9g5gudyRpYpSOLT%3A1568098222042&';

  var options = {
    url:
      'https://play.google.com/_/PlayStoreUi/data/batchexecute?rpcids=UsvDTd&f.sid=-2854907770923433181&bl=boq_playuiserver_20190908.06_p0&hl=ko&authuser=0&soc-app=121&soc-platform=1&soc-device=1&_reqid=457011&rt=c',
    method: 'POST',
    headers: headers,
    body: dataString
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }

  request(options, callback);

  res.send('home3');
};
