import * as functions from 'firebase-functions'
import * as Storage from '@google-cloud/storage'
const gcs = Storage()
import { tmpdir } from 'os'
import { join, dirname } from 'path'
import * as sharp from 'sharp'
import * as fs from  'fs-extra'

export const generateThumbs = functions.storage
  .object()
  .onFinalize(
    async object => {
      const bucket = gcs.bucket(object.bucket)
      const filePath = object.name
      const fileName = filePath.split('/').pop()
      const bucketDir = dirname(filePath)
      const workingDir = join(tmpdir(), 'thumbs')
      const tmpFilePath = join(workingDir, 'source.png')
      //prevent infinite loop - since this function will be called on ALL new uploads, including these thumbnails right
      if(fileName.includes('@thumb') || object.contentType.includes( 'image')){
        console.log('exiting function - already a thumb or not an image')
        return
      }
      //1. ensure thumbnail dir exists
      await fs.ensureDir(workingDir)
      //2. Download source file
      await bucket.file(filePath).download(
        {
          destination: tmpFilePath,
        }
      )
      //3. Resize the images and define an array of upload promises
      const sizes = [64, 128, 256]
      const uploadPromises = sizes.map(
        async size => {
          const thumbName = `thumb@${size}_${filename }`
          const thumbPath = join(workingDir, thumbName)
          //resize source image
          await sharp(tmpFilePath).resize(size, size)
            .toFile(thumbPath)
          //Upload to gcs 
          return bucket.upload(thumbPath, {
            destination: join(bucketDir, thumbName)
          })
        }
      ) 
      //4. Run the upload ops
      await Promise.all(uploadPromises) 
      
      //5. Cleanup/remove the tmp/thumbs from the filesystem
      return fs.remove(workingDir)
})