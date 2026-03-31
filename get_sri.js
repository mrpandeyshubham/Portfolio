const https = require('https');
const crypto = require('crypto');
const urls = [
  'https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
  'https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.min.js',
  'https://cdn.emailjs.com/sdk/3.2.0/email.min.js'
];
urls.forEach(url => {
  https.get(url, (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      const hash = crypto.createHash('sha384').update(rawData).digest('base64');
      console.log(url + ' => sha384-' + hash);
    });
  });
});
