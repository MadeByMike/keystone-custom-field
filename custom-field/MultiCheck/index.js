const {
  MultiCheck,
  MongoIntegerInterface,
  KnexIntegerInterface
} = require("./Implementation");

const { Text } = require("@keystonejs/fields");

module.exports = {
  type: "MultiCheck",
  implementation: MultiCheck,
  views: {
    Controller: Text.views.Controller, // Note: You cannot extend an existing controller outside the monorepo for reasons I want to change (sorry this was a mistake in design) copy the base implementation and modify for now if required
    Field: require.resolve("./views/Field"),
    Filter: Text.views.Filter,
    Cell: require.resolve("./views/Cell")
  },
  adapters: {
    mongoose: MongoIntegerInterface,
    knex: KnexIntegerInterface
  }
};
