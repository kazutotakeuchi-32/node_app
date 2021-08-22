const request = require('request')
const { JSDOM } = require('jsdom')

request('https://taketon-blog.com/kazugramming', (e, response, body) => {
  if (e) {
    console.error(e)
  }
  try {
    const dom = new JSDOM(body)
    // console.log(dom.window.document.body.innerHTML);
    const html = dom.window.document.querySelectorAll("h2")
    for (let i = 0; i < html.length; i++) {
      console.log(html[i].textContent.trim());
    }

  } catch (e) {
    console.error(e)
  }
})
