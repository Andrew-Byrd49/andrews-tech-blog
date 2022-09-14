const { Post } = require("../models");

const postdata = [
  // {
  //   title: '',
  //   content: "",
  //   user_id: ,
  // },
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;