const { createClient } = require("@supabase/supabase-js");

const bucketUrl = process.env.BUCKET_URL;
const bucketKey = process.env.BUCKET_KEY;
const client = createClient(bucketUrl, bucketKey);

module.exports = client;
