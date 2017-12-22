const {PubgAPI} = require('./');
const api = new PubgAPI();

const {MATCH, SEASON, REGION} = require('./util/constants');

//getProfileByID(playerid, season, server, queuesize, mode)
api.getProfileByID('59fdabfb33bd730001661ad2', SEASON.RE2018sea1, REGION.EU, MATCH.SQUAD.size, MATCH.SQUAD.name)
  .then((profile) => {
    console.log(profile);
  }).catch((error) => {
  	console.error(error);
  });