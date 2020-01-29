const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { Text } = require("@keystonejs/fields");
const { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
const Stars = require("./custom-field/Stars");
const MultiCheck = require("./custom-field/MultiCheck");

const keystone = new Keystone({
  name: "custom-field",
  adapter: new MongooseAdapter()
});

keystone.createList("Thing", {
  fields: {
    rating: { type: Stars, starCount: 5 },
    multiCheck: {
      type: MultiCheck,
      defaultValue: { one: true, two: false, three: false }
    }
  }
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ enableDefaultRoute: true })]
};
