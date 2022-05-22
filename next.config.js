const withPlugins = require('next-compose-plugins');
const withPolyfill = require('next-with-polyfill');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  (phase, defaultConfig) => {
    return withBundleAnalyzer(nextConfig)
  },
  withPolyfill([
    './node_modules/core-js/stable',
    './node_modules/regenerator-runtime/runtime',
  ]),
]);


