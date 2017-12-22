/* eslint-disable constructor-super */
const Promise = require('bluebird');
const request = require('request-promise');
var errors = require('request-promise/errors');

const {RedisCache, NoCache} = require('./cache');
const {EmptyResponse, ProfileNotFound} = require('./pubg-errors');
const PubgTrackerAPI = require('./api/pubg-tracker-api');

class Client extends PubgTrackerAPI {

  constructor(redisConfig) {
    super();

    this.GAME = 'PUBG';

    if (redisConfig) {
      this.cache = new RedisCache(redisConfig);
    } else {
      this.cache = new NoCache();
    }
  }

  createKey(uri) {
    return `${this.GAME};${uri}`;
  }

  handleCache(uri) {
    const key = this.createKey(uri);

    return this.cache.get(key)
      .then((content) => {
        if (!content) {
          return this.makeHttpRequest(uri);
        }
        var json = JSON.parse(content);
        return json;
      });
  }

  makeHttpRequest(uri) {
    let data;

    return Promise.resolve(request(uri))
      .then((body) => {
        try {
          data = JSON.parse(body);
        } catch (err) {
          throw new Error('Failed to parse JSON', err, body);
        }

        const key = this.createKey(uri);

        return this.cache.set(key, body);
      })
      .then(() => data)
      .catch(function(err){
        if (err.statusCode == 404) {
          throw new EmptyResponse();
        }
      });
  }
}

module.exports = Client;
