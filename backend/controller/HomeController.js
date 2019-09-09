var request = require('request');

export const home = (req, res) => {
  const url =
    'https://play.google.com/store/apps/details?id=com.bluestonesoft.soularkglobal&hl=ko&showAllReviews=true';

  const url_id = 'com.bluestonesoft.soularkglobal';

  const curl =
    'curl "https://play.google.com/_/PlayStoreUi/data/batchexecute?rpcids=UsvDTd^&f.sid=4389563738642812463^&bl=boq_playuiserver_20190904.07_p2^&hl=ko^&authuser=0^&soc-app=121^&soc-platform=1^&soc-device=1^&_reqid=484949^&rt=c" -H "sec-fetch-mode: cors" -H "x-same-domain: 1" -H "origin: https://play.google.com" -H "accept-encoding: gzip, deflate, br" -H "accept-language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7" -H "cookie: CONSENT=YES+KR.ko+20170723-09-1; _ga=GA1.3.390621279.1562587514; SID=nwfKZO3u0fe5GMnfO40zcyNHmq2eXojro-_Kw163M30vok39W40qgBG4e2r_CUw33ucUnw.; HSID=AfzogchdhcVWhnKum; SSID=AmboZBRFOHM5A5E9T; APISID=KABcr2xFHhDTt-Hn/A2x7noLo0CnSRPK4a; SAPISID=Y4MIpj92FizFGKNe/AwY6kkbP5l-qYr5o_; ANID=AHWqTUn_NHha126GzmG4ozL-jQbkS9cJljrul4ffVht-5sVFUgLP45Ws3-D7D3aD; _gac_UA-19995903-1=1.1567883004.EAIaIQobChMIoe_nqbO_5AIVVaSWCh1KDgm3EAAYASAAEgKNXfD_BwE; OTZ=5092983_20_20__20_; NID=188=Fkf1crcgkJeSqlXGNq70tqQCJUqirGX55yElGU1Zqmrl4TQj-iQWGTQJt1o8-OgOmv9P5kEemXoD-A6AQqMlCRcv9nEJOs9q9tNOTScXJLnJ34HyiAjlBmcUIi9v0GW0zegEcMP4WjIt5lwnh0CWTJmYaBdlyRS3_YXCY9zWuYug971XamQIlgEHD_T-91aMLGUbsM4rt5iax-g0ipmUperyDOb80JlPVoyWorZohTQfTmy25hWwH1CvqCw; PLAY_ACTIVE_ACCOUNT=ICrt_XL61NBE_S0rhk8RpG0k65e0XwQVdDlvB6kxiQ8=wkdaudwn1028^@gmail.com; 1P_JAR=2019-9-9-14; _gid=GA1.3.1021932598.1568039746; _gat_UA199959031=1; SIDCC=AN0-TYv5H9xnumxuBUsCeeAymXXxJbfcOiarR8fJIzoSEq0TelzOnuJA5-agSxNIjbHs14FUbWQ" -H "x-client-data: CJK2yQEIpLbJAQjBtskBCKmdygEIqKPKAQiypcoBCOKoygEIl63KAQjNrcoBCMqvygE=" -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36" -H "content-type: application/x-www-form-urlencoded;charset=UTF-8" -H "accept: */*" -H "referer: https://play.google.com/" -H "authority: play.google.com" -H "sec-fetch-site: same-origin" --data "f.req=^%^5B^%^5B^%^5B^%^22UsvDTd^%^22^%^2C^%^22^%^5Bnull^%^2Cnull^%^2C^%^5B2^%^2Cnull^%^2C^%^5B40^%^2Cnull^%^2C^%^5C^%^22CpMBCpABKm4KOvc7msxH_99IgZielp7Fz8_Pz8_PnJqdmpzMmZmdnsXOxYmSxc7Ly8nJysrKxs7GxsbLzs3HysvI__4QKCFtgTa2o-RR0zG7XUjlFq5ulTl-tyAAuDNlxFAAWgsJbgQca0BjhQsQA2Cs_rWRATIeChwKGmFuZHJvaWRfaGVscGZ1bG5lc3NfcXNjb3Jl^%^5C^%^22^%^5D^%^2Cnull^%^2C^%^5B^%^5D^%^5D^%^2C^%^5B^%^5C^%^22com.bluestonesoft.soularkglobal^%^5C^%^22^%^2C7^%^5D^%^5D^%^22^%^2Cnull^%^2C^%^22generic^%^22^%^5D^%^5D^%^5D^&at=AK6RGVam3hRyCgZcypT-GBUkIdi8^%^3A1568039742792^&" --compressed';

  var headers = {
    'sec-fetch-mode': 'cors',
    'x-same-domain': '1',
    origin: 'https://play.google.com',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    cookie:
      'CONSENT=YES+KR.ko+20170723-09-1; _ga=GA1.3.390621279.1562587514; SID=nwfKZO3u0fe5GMnfO40zcyNHmq2eXojro-_Kw163M30vok39W40qgBG4e2r_CUw33ucUnw.; HSID=AfzogchdhcVWhnKum; SSID=AmboZBRFOHM5A5E9T; APISID=KABcr2xFHhDTt-Hn/A2x7noLo0CnSRPK4a; SAPISID=Y4MIpj92FizFGKNe/AwY6kkbP5l-qYr5o_; ANID=AHWqTUn_NHha126GzmG4ozL-jQbkS9cJljrul4ffVht-5sVFUgLP45Ws3-D7D3aD; _gac_UA-19995903-1=1.1567883004.EAIaIQobChMIoe_nqbO_5AIVVaSWCh1KDgm3EAAYASAAEgKNXfD_BwE; OTZ=5092983_20_20__20_; NID=188=Fkf1crcgkJeSqlXGNq70tqQCJUqirGX55yElGU1Zqmrl4TQj-iQWGTQJt1o8-OgOmv9P5kEemXoD-A6AQqMlCRcv9nEJOs9q9tNOTScXJLnJ34HyiAjlBmcUIi9v0GW0zegEcMP4WjIt5lwnh0CWTJmYaBdlyRS3_YXCY9zWuYug971XamQIlgEHD_T-91aMLGUbsM4rt5iax-g0ipmUperyDOb80JlPVoyWorZohTQfTmy25hWwH1CvqCw; PLAY_ACTIVE_ACCOUNT=ICrt_XL61NBE_S0rhk8RpG0k65e0XwQVdDlvB6kxiQ8=wkdaudwn1028^@gmail.com; 1P_JAR=2019-9-9-14; _gid=GA1.3.1021932598.1568039746; _gat_UA199959031=1; SIDCC=AN0-TYv5H9xnumxuBUsCeeAymXXxJbfcOiarR8fJIzoSEq0TelzOnuJA5-agSxNIjbHs14FUbWQ',
    'x-client-data': 'CJK2yQEIpLbJAQjBtskBCKmdygEIqKPKAQiypcoBCOKoygEIl63KAQjNrcoBCMqvygE=',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    accept: '*/*',
    referer: 'https://play.google.com/',
    authority: 'play.google.com',
    'sec-fetch-site': 'same-origin'
  };

  var dataString =
    'f.req=^%^5B^%^5B^%^5B^%^22UsvDTd^%^22^%^2C^%^22^%^5Bnull^%^2Cnull^%^2C^%^5B2^%^2Cnull^%^2C^%^5B40^%^2Cnull^%^2C^%^5C^%^22CpMBCpABKm4KOvc7msxH_99IgZielp7Fz8_Pz8_PnJqdmpzMmZmdnsXOxYmSxc7Ly8nJysrKxs7GxsbLzs3HysvI__4QKCFtgTa2o-RR0zG7XUjlFq5ulTl-tyAAuDNlxFAAWgsJbgQca0BjhQsQA2Cs_rWRATIeChwKGmFuZHJvaWRfaGVscGZ1bG5lc3NfcXNjb3Jl^%^5C^%^22^%^5D^%^2Cnull^%^2C^%^5B^%^5D^%^5D^%^2C^%^5B^%^5C^%^22com.bluestonesoft.soularkglobal^%^5C^%^22^%^2C7^%^5D^%^5D^%^22^%^2Cnull^%^2C^%^22generic^%^22^%^5D^%^5D^%^5D^&at=AK6RGVam3hRyCgZcypT-GBUkIdi8^%^3A1568039742792^&';

  var options = {
    url:
      'https://play.google.com/_/PlayStoreUi/data/batchexecute?rpcids=UsvDTd^&f.sid=4389563738642812463^&bl=boq_playuiserver_20190904.07_p2^&hl=ko^&authuser=0^&soc-app=121^&soc-platform=1^&soc-device=1^&_reqid=484949^&rt=c',
    method: 'POST',
    headers: headers,
    body: dataString
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }

  const test = request(options, callback);

  console.log(test);

  res.send('home');
};
