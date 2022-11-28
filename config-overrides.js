const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@assets": "src/assets",
    "@common": "src/common",
    "@Components": "src/Components",
    "@hooks": "src/hooks",
    "@pages": "src/pages",
    "@redux": "src/redux",
    "@routes": "src/routes",
    "@services": "src/services",
    "@ui": "src/ui",
    "@validation": "src/validation",
  })(config);
  return config;
};
