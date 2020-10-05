const request = require('request')
const cheerio = require('cheerio')
const { extractSheets } = require('spreadsheet-to-json')

async function main () {
  const metas = await (new Promise((resolve, reject) => {
    extractSheets({
      spreadsheetKey: process.env.SHEET_KEYS
    }, function (err, data) {
      if (err) { reject(err) }
      resolve({
        members: data.WWD.map(row => ({
          project: row['分組'],
          name: row['姓名'],
          url: row['連結']
        })),
        projects: data['主頁專案小卡'].map(row => ({
          project: row['組別'],
          title: row['大標'],
          intro: row['簡介文案'],
          issuu: row.IssuuUrl,
          tags: row.Tag.split(','),
          previewImage: `${row.group_id}/preview.jpg`
        }))
      })
    })
  }))

  const promiseList = metas.members.map(({ name, url, project }) =>
    new Promise((resolve, reject) => {
      if (url === null) {
        resolve(resolve({
          name,
          project
        }))
      } else {
        request(encodeURI(url),
          function (err, r, body) {
            if (err) { reject(err) }
            console.log(`fetch ${name} - aravar - done`)
            const $ = cheerio.load(body)
            const author = $('meta[name="author"]').attr('content')
            resolve({
              avatar: author ? $(`img[alt="${author}"]`).attr('src') : null,
              name,
              project
            })
          })
      }
    }))

  const members = await Promise.all(promiseList)

  const merged = metas.projects.map(({ project, title, intro, issuu, tags, previewImage }) => ({
    project,
    title,
    intro,
    issuu,
    tags,
    previewImage,
    members: members.filter(({ project: group }) => group === project)
  }))

  console.error(JSON.stringify(merged))
}

main()
