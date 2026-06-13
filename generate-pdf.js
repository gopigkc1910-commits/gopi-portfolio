const puppeteer = require('puppeteer');
const path = require('path');
(async ()=>{
  try{
    const browser = await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
    const page = await browser.newPage();
    const file = path.resolve(__dirname,'resume.html');
    await page.goto('file://'+file, {waitUntil:'networkidle0'});
    await page.pdf({path:'resume.pdf', format:'A4', printBackground:true});
    await browser.close();
    console.log('resume.pdf written');
  }catch(err){
    console.error(err);
    process.exit(1);
  }
})();
