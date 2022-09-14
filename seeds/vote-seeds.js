const { Vote } = require("../models");

const votedata = [
  // {
  //   user_id: ,
  //   post_id: ,
  // },
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;