const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  cn: 'cn',
  tw: 'tw',
  id: 'id',
  fr: 'fr',
  tr: 'tr',
  ar: 'ar',
  ru: 'ru',
};

module.exports = withPlugins(
  [
    [withCSS, {}],
    [withSass, {}],
  ],
  {
    rewrites: () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
  }
);
