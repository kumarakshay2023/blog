const { uploadMedia } = require("../services/s3.service");

exports.uploadFile = async (req, res) => {
  try {
    if (req.files?.file) {
      const file = req.files.file;
      const result = await uploadMedia(`${Date.now() + file.name}`, file.data);

      return res.json({ status: true, statusCode: 200, url: result.Location });
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
