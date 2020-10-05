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
          avatar: row.avatar
        })),
        projects: data['主頁專案小卡'].map(row => ({
          project: row['組別'],
          title: row['大標'],
          intro: row['簡介文案'],
          issuu: row.IssuuUrl,
          tags: row.Tag.split(','),
          previewImage: `${row.group_id}/preview.jpg`,
          slug: row.group_id
        }))
      })
    })
  }))

  const merged = metas.projects.map(({ project, title, intro, issuu, tags, previewImage, slug }) => ({
    project,
    title,
    intro,
    issuu,
    tags,
    previewImage,
    slug,
    members: metas.members.filter(({ project: group }) => group === project)
  }))

  console.error(JSON.stringify(merged))
}

main()
