const createSignedUploadURL = require("../utils/createSignedUploadURL");
const createSignedURL = require("../utils/createSignedURL");

async function uploadURL(req, res, next) {
  const path = req.user.businessId + ".jpg";
  try {
    const { data, error } = await createSignedUploadURL(path);
    if (error)
      return res.status(500).json({
        message: `could not generate signed upload URL ${error.message}`,
      });
    
    res.status(200).json({ URL: data.signedUrl, token: data.token });
  } catch (ex) {
    next(ex);
  }
}

async function accessURL(req, res, next) {
  const path = req.user.businessId + ".jpg";
  try {
    const { data, error } = await createSignedURL(path);
    if (error)
      return res
        .status(500)
        .json({ message: `could not generate signed URL ${error.message}` });

    res.status(200).json({ URL: data.signedUrl });
  } catch (ex) {
    next(ex);
  }
}
module.exports = { uploadURL, accessURL };
