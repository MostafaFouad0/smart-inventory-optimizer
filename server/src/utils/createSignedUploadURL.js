const client = require("./bucketClient");
//surrond in a try-catch block
async function createSignedUploadURL(path, expiresIn = 180) {
  const { data, error } = await client.storage
    .from("ProfileImage")
    .createSignedUploadUrl(path, expiresIn, {
      upsert: true,
    });
  return { data, error };
}
module.exports = createSignedUploadURL;
