import http from 'https';
http.get('https://mixkit.co/free-sound-effects/birds/', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => console.log(data.match(/https:\/\/assets.mixkit.co\/active_storage\/sfx\/\d+\/\d+-preview.mp3/)[0]));
});
