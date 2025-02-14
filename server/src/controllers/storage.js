const createSignedUploadURL = require("../services/storage/createSignedUploadURL");
const createSignedURL = require("../services/storage/createSignedURL");
const deleteProfileImage = require("../services/storage/deleteFile");

async function uploadURL(req, res, next) {
  const path = req.user.businessId + ".jpg";
  try {
    const { data, error } = await createSignedUploadURL(path, "ProfileImage");
    if (error)
      return res.status(500).json({
        message: `could not generate signed upload URL, ${error.message}`,
      });

    res.status(200).json({ URL: data.signedUrl, token: data.token });
  } catch (ex) {
    next(ex);
  }
}

async function accessURL(req, res, next) {
  const path = req.user.businessId + ".jpg";
  try {
    const { data, error } = await createSignedURL(path, "ProfileImage");
    if (error)
      if (error.message === "Object not found")
        return res.status(404).json({ message: "Object not found" });
      else
        return res.status(500).json({
          message: `could not generate signed URL, ${error.message}`,
        });
    res.status(200).json({ URL: data.signedUrl });
  } catch (ex) {
    next(ex);
  }
}

async function deleteURL(req, res, next) {
  const path = req.user.businessId + ".jpg";
  try {
    const { error } = await deleteProfileImage(path, "ProfileImage");
    if (error)
      return res.status(500).json({
        message: `could not delete object, ${error.message}`,
      });

    res.status(200).json({ message: "object deleted successfully" });
  } catch (ex) {
    next(ex);
  }
}
module.exports = { uploadURL, accessURL, deleteURL };
