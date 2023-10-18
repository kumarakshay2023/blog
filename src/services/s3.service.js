let AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY
})


const s3 = new AWS.S3();
const myBucket = process.env.S3_BUCKET;


const uploadMedia = async (filename, body) => {
    const file = await s3.upload({
        Bucket: myBucket,
        Key: `blog/${filename}`,
        ACL: "public-read",
        Body: body,
    }).promise();
   console.log(file,'fileeee')
    return file
}

const deleteMedia = async  (params) =>{
    try {
        const filename = params;
        const file = await s3.deleteObject({ Bucket: myBucket, Key: filename }).promise();
        return file;
      } catch (error) {
        console.error('Error deleting object from S3:', error);
        throw error;
      }
};

module.exports =  {uploadMedia,deleteMedia} 