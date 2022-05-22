module.exports = {
  "sourceType": "unambiguous",
  "presets": [
    ["next/babel", {
      "preset-env": {
        "loose": true,
        "modules": false
      },
      "@babel/preset-typescript": {
        "loose": true,
        "modules": false
      },
      "@babel/preset-react": {
        "runtime": 'automatic',
        "development": process.env.NODE_ENV === 'development',
        "importSource": '@welldone-software/why-did-you-render',
        "modules": false,
        "loose": true
      },
    }],
  ],
  "plugins": [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods',
    '@babel/plugin-proposal-private-property-in-object'
  ],
}