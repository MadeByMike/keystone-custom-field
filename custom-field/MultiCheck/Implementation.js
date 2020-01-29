const { Text } = require("@keystonejs/fields");

// Using the text implementation because I am going to JSON stringify the array of results
// I could store this in another table which would require writing a complex controller
// but JSON.stringify feels good enough for this simple field.

class MultiCheck extends Text.implementation {
  extendAdminMeta(meta) {
    return { ...meta }; // Remove additions to extendMeta but the text implementation
  }
}

module.exports = {
  MultiCheck,
  MongoIntegerInterface: Text.adapters.mongoose,
  KnexIntegerInterface: Text.adapters.knex
};
