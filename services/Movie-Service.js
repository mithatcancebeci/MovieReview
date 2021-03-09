const UserModel = require("../models/user");
const CommentModel = require("../models/comments");
const MovieModel = require("../models/movie");

exports.getMovies = async (req, res, next) => {
  const movies = [];
  movies.push(await MovieModel.find());
  res.send(movies);
};
exports.getMovie = async (req, res, next) => {
  const movie = await MovieModel.findById(req.params.id);
  res.send(movie);
};

exports.postCommentToMovie = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.user });
    const comment = await CommentModel.create({ content: req.body.comment });
    const movie = await MovieModel.findOne({ id: req.params.id });

    user.comments.push(comment);
    comment.user = user._id;
    movie.comments.push(comment);
    comment.movie = movie.id;
    await movie.save();
    await user.save();
    await comment.save();
    res.status(200).json({
      message: comment.content + "Success send",
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getCommentsOfMovie = async (req, res, next) => {

const comment=await CommentModel.find({ movie: req.params.id}).populate('user')
const body={
    username:[],
    content:[],
    displayName:[]
}
comment.map((item,index)=>{
    body.username.push(item.user.username)
    body.content.push(item.content)
    body.displayName.push(item.user.displayName);
})
console.log(body)
res.json(body)
}