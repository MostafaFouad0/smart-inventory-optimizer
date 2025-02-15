const client = require("../../../prisma/main/client");
const changeStatus = async (id, status) => {
  /*
        id is the id of the CSV file
        status should be one of the following:["In queue", "Processing", "Done", "Failed"]

    */
  await client.cSVStatus.update({
    where: {
      id: id,
    },
    data: {
      status: status,
    },
  });
};
module.exports = changeStatus;
