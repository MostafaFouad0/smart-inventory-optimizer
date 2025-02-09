const client = require("./bucketClient");
//surrond in a try-catch block
async function createSignedUploadURL(path, expiresIn = 180) {
  const { data, error } = await client.storage
    .from("ProfileImage")
    .createSignedUploadUrl(path, expiresIn, {
      upsert: true,
    });

  if (error) throw error;
  return data;
}
module.exports = createSignedUploadURL;
