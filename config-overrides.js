const { compose } = require('react-app-rewired');
const { createEmotionRewire } = require('react-app-rewire-emotion');

/* config-overrides.js */
const rewires = compose(
  createEmotionRewire({
    inline: true
  })
);

module.exports = function override(config, env) {
  const {
    resolve: { plugins: resolvePlugins }
  } = config;

  // Remove ModuleScopePlugin
  resolvePlugins.length = 0;

  return rewires(config, env);
};
