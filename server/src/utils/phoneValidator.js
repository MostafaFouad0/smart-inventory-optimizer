const { parsePhoneNumberFromString } = require("libphonenumber-js");
const validatePhone = (value, helpers) => {
  try {
    if (!value) return value;

    const phoneNumber = parsePhoneNumberFromString(value);

    if (!phoneNumber || !phoneNumber.isValid()) {
      return helpers.message("Invalid phone number format");
    }

    if (phoneNumber.ext) {
      return helpers.message("Phone extensions not allowed");
    }

    // Return formatted E.164 number
    return (value = phoneNumber.format("E.164"));
  } catch (error) {
    return helpers.message("Invalid phone number format");
  }
};
module.exports = validatePhone;
