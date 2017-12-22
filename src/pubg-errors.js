/**
 * ProfileNotFound
 *
 * @class ProfileNotFound
 * @extends {Error}
 */
class ProfileNotFound extends Error {
  constructor(msg) {
    super(msg || 'Profile Not Found');
    this.name = this.constructor.name;
  }
}

/**
 * ProfileNotFound
 *
 * @class ProfileNotFound
 * @extends {Error}
 */
class StatsNotFound extends Error {
  constructor() {
    super('Stats not found');
    this.name = this.constructor.name;
  }
}

/**
 * EmptyResponse
 *
 * @class EmptyResponse
 * @extends {Error}
 */
class EmptyResponse extends Error {
  constructor() {
    super('Dataresponse is empty');
    this.name = this.constructor.name;
  }
}

module.exports = {
  EmptyResponse,
  ProfileNotFound,
  StatsNotFound,
};
