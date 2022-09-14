const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Thanks! I've been so stuck on this one",
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;