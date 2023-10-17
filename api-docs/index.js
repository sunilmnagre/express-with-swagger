'use strict';

const users = require('./users');
const shows = require('./shows');
const subscriptions = require('./subscriptions');
const episodes = require('./episodes');
const bookmarks = require('./bookmarks');
const set = require('./set');
const cast = require('./cast');
const crew = require('./crew');
const lookups = require('./lookups');
const synopsis = require('./synopsis');
const feedback = require('./feedback');
const trending = require('./trending');

const routes = {
  ...bookmarks, ...cast, ...crew, ...episodes, ...feedback,
  ...lookups, ...set, ...shows, ...subscriptions,
  ...synopsis, ...trending, ...users
}

module.exports = routes;
