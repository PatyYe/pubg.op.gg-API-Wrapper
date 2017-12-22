const queryString = require('query-string');
const Profile = require('./profile-object');

class PubgTrackerAPI {

  getProfileByID(playerid, season, server, queuesize, mode) {
    const uri = `https://pubg.op.gg/api/users/${playerid}/ranked-stats?season=${season}&server=${server}&queue_size=${queuesize}&mode=${mode}`;

    return this.handleCache(uri)
      .then((content) => new Profile(content));
  }

}

module.exports = PubgTrackerAPI;
