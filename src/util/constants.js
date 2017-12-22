const {assign} = require('lodash');

const REGION = {
  AS: 'as',
  EU: 'eu',
  NA: 'na',
  OC: 'oc',
  SA: 'sa',
  SEA: 'sea',
  KRJP: 'krjp'
};

const SEASON = {
  EA2017pre1: '2017-pre1',
  EA2017pre2: '2017-pre2',
  EA2017pre3: '2017-pre3',
  EA2017pre4: '2017-pre4',
  EA2017pre5: '2017-pre5',
  EA2017pre6: '2017-pre6',
  RE2018sea1: '2018-01'
};

const MATCH = {
  SOLO: {
    name: 'tpp',
    size: 1
  },
  DUO:{
    name: 'tpp',
    size: 2
  },
  SQUAD: {
    name: 'tpp',
    size: 4
  },
  SOLOFPP: {
    name: 'fpp',
    size: 1
  },
  DUOFPP: {
    name: 'fpp',
    size: 2
  },
  SQUADFPP: {
    name: 'fpp',
    size: 4
  },
};

exports.REGION = REGION;
exports.SEASON = SEASON;
exports.MATCH = assign({}, MATCH, {DEFAULT: MATCH.SQUAD});
