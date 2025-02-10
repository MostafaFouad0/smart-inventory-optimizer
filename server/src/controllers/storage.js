const createSignedUploadURL = require("../utils/createSignedUploadUrl");
const createSignedURL = require("../utils/createSignedURL");
//controllers/storage.js
async function uploadURL(req, res, next) {
  const path = req.user.businessId + ".jpg";
  try {
    const { data, error } = await createSignedUploadURL(path);
    if (error)
      return res.status(500).json({ message: "could not generate signed upload URL" });

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
      return res.status(500).json({ message: "could not generate signed URL" });

    res.status(200).json({ URL: data.signedUrl });
  } catch (ex) {
    next(ex);
  }
}
module.exports = { uploadURL, accessURL };
