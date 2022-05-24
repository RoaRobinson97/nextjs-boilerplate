/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const withPolyfill = require('next-with-polyfill');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['pages'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withPlugins([
  (phase, defaultConfig) => {
    return withBundleAnalyzer(nextConfig);
  },
  withPolyfill(['./node_modules/core-js/stable', './node_modules/regenerator-runtime/runtime'])
]);
