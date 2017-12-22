[![npm version](https://badge.fury.io/js/pubg-api-redis.svg)](https://badge.fury.io/js/pubg-api-redis)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# pubg.op.gg

Playerunknown's Battlegrounds API Wrapper with Redis caching.

* The API is maintained and provided by [https://pubg.op.gg](https://pubg.op.gg) and all credits go to them. Thank you for providing all the data needed.

* It caches all http requests for 5 minutes in Redis.

## Installation

```
npm install -S pubg-op-gg
```

## Usage

The API for PUBG.OP.GG doesn't require any API key. However you'll need to provide the user id (Steam ID).
The results are very limited, as the origin does not provide a lot of stats, as there is no documentation, everything provided in this wrapper is what I do know so far.

```javascript
const {PubgAPI, PubgAPIErrors, REGION, SEASON, MATCH} = require('pubg-api-redis');

// If no Redis configuration it wont be cached
const api = new PubgAPI({
  redisConfig: {
    host: '127.0.0.1',
    port: 6379,
    expiration: 300, // Optional - defaults to 300.
  },
});

api.getProfileByID('59fdabfb33bd730001661ad2', SEASON.RE2018sea1, REGION.EU, MATCH.SQUAD.size, MATCH.SQUAD.name)
  .then((profile) => {
    const data = profile.getStats;
    console.log(data);
  })
  .catch((err) => {
  	console.error(err);
  });
```

The methods currently available are:
getRank()
getMaxRank()
getStats()