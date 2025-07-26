import COS from 'cos-nodejs-sdk-v5'
import fs from 'node:fs'
import path from 'node:path'

async function upload(dir, filePath) {
  const cos = new COS({
    SecretId: process.env.COS_SECRET_ID,
    SecretKey: process.env.COS_SECRET_KEY
  })

  const filename = path.basename(filePath)
  const Key = `${dir}/${filename}`

  const result = await cos.putObject({
    Bucket: process.env.COS_BUCKET,
    Region: process.env.COS_REGION,
    Key,
    Body: fs.createReadStream(filePath)
  })

  if (result.statusCode === 200) {
    console.log('上传成功')
  }

  const staticPath = cos.getObjectUrl({
    Bucket: process.env.COS_BUCKET,
    Region: process.env.COS_REGION,
    Key: Key,
    Sign: false,
    Domain: 'https://imings.cn/'
  })

  console.log(staticPath)
}

upload('web', '/Users/jason/Downloads/yjs.png')
