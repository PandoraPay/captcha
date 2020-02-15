const fs = require('fs')
const captcha = require('./lib/captcha')

async function run() {
    const { token, buffer } = await captcha({size: 6})

    // console.log(token, buffer)

    fs.createWriteStream('a.gif').on('finish', () => console.log(token)).end(buffer)
}

run()