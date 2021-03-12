const UserModel = require("../models/user.js");
const CommentModel = require("../models/comments");


exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    const body = {
      username: user.username,
      displayName: user.displayName,
      image: user.image,
      favorite: user.favorite,
    };
    res.json(body);
  } catch (e) {
    console.log(e);
  }
};
exports.getUserOfComments = async (req, res) => {
  try {
    await CommentModel.find()
      .limit(5)
      .populate({
        path: "user",
        match: { username: req.params.username },
        select: ["username", "displayName", "image"],
      })
      .then((comments) => {
        res.json(comments);
      });
  } catch (e) {
    console.log(e);
  }
};
exports.uploadImage = async (req, res) => {
  console.log(req.file.filename);
  const user = await UserModel.findOne({ username: req.params.username });

  user.image = req.file.filename;
  await user.save();
  console.log(user.image);

  res.status(200).json({
    success: true,
    file:req.file
  });
};
