const {MATCH, SEASON, REGION} = require('../util/constants');
const {StatsNotFound} = require('../pubg-errors');

function formatProperty(prop) {
  const str = String(prop).replace(/\s/g, '');
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

class Profile {
  constructor(content) {
    this.content = content;
    this.stats = content.stats;
    this.ranks = content.ranks;
    this.max_ranks = content.max_ranks;
    
    if (!this.stats) {
      throw new StatsNotFound();
    }
  }

  getRank() {
    return this.ranks;
  }

  getMaxRank() {
    return this.max_ranks;
  }

  getStats() {
    return this.stats;
  }
}

module.exports = Profile;
