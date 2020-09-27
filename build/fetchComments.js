const request = require('request')
const cheerio = require('cheerio')
const { extractSheets } = require('spreadsheet-to-json')

extractSheets({
  spreadsheetKey: process.env.SHEET_KEYS
}, function (err, data) {
  if (err) { console.log(err) }
  const metas = data.WWD.map(row => ({
    name: row['姓名'],
    url: row['連結'],
    quote: row.quote,
    tags: row.tag ? row.tag.split(',') : []
  }))
  const promiseList = metas.filter(({ url }) => url !== null)
    .map(({ name, url, quote, tags }) => new Promise((resolve, reject) => {
      request(encodeURI(url),
        function (err, r, body) {
          if (err) { reject(err) }
          console.log(`fetch ${name} - ${url}...done`)
          const $ = cheerio.load(body)
          resolve({
            name,
            url,
            quote,
            title: $('meta[property="og:title"]').attr('content') || $('meta[property="title"]').attr('content') || $('meta[name="og:title"]').attr('content') || $('meta[name="title"]').attr('content'),
            content: $('meta[property="og:description"]').attr('content') || $('meta[property="description"]').attr('content') || $('meta[name="og:description"]').attr('content') || $('meta[name="description"]').attr('content'),
            tags
          })
        })
    }))

  Promise.all(promiseList).then((r) => {
    console.error(JSON.stringify(r))
  })
})
