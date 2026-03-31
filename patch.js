const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

let html = fs.readFileSync('index.html', 'utf8');

const urls = [
  'https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
  'https://unpkg.com/scrollreveal',
  'https://cdn.emailjs.com/sdk/3.2.0/email.min.js'
];

async function fetchHash(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const { URL } = require('url');
          redirectUrl = new URL(redirectUrl, url).href;
        }
        return resolve(fetchHash(redirectUrl));
      }
      let rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        resolve('sha384-' + crypto.createHash('sha384').update(rawData).digest('base64'));
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const url of urls) {
    const hash = await fetchHash(url);
    const regex = new RegExp(`(src|href)="${url.replace(/\//g, '\\/')}"`, 'g');
    html = html.replace(regex, `$1="${url}" integrity="${hash}" crossorigin="anonymous"`);
  }
  
  // Fix Tabnabbing
  html = html.replace(/target="_blank"/g, 'target="_blank" rel="noopener noreferrer"');
  
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Patched index.html successfully!');
})();
