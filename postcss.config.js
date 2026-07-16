const {
  color,
  media,
  opacity,
  typography,
} = require("./src/v1/@monospaced/modern/tokens");

module.exports = () => ({
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {
      features: {
        customMedia: { extensions: media },
        customProperties: {
          variables: Object.assign({}, color, opacity, typography),
        },
      },
    },
  },
});
