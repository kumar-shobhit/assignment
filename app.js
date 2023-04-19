const Tesseract = require('tesseract.js');

async function solveCaptcha(imageUrl) {
 
  const { data } = await Tesseract.recognize(imageUrl);

 
  return data.text;
}

solveCaptcha('https://example.com/captcha.png')
  .then((captchaText) => {
    console.log(`The captcha is: ${captchaText}`);
  })
  .catch((error) => {
    console.error(`Failed to solve captcha: ${error}`);
  });
