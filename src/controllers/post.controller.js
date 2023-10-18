const Post = require("../db/models/post");

exports.createPost = async (req, res) => {
  try {
    const { heading, content, image, hashtag } = req.body;
    const userId = req.user.id;
    if (!heading || !content) {
      return res.status(400).json({
        msg: "Heading or contents required",
        status: true,
      });
    }
    await Post.create({ heading, content, image, hashtag, user: userId });
    return res.status(200).json({
      msg: "Post added sucessfully",
      status: true,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Something went wrong",
      status: false,
    });
  }
};

exports.editPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const postData = await Post.findByIdAndUpdate({ _id: postId }, req.body);
    if (!postData) {
      return res.status(400).json({
        msg: "Post Does Not Exist!",
        status: false,
      });
    }
    return res.status(200).json({
      msg: "Post Updated Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Something went wrong",
      status: false,
    });
  }
};

exports.getPostList=async(req,res)=>{
  try {
     const postData = await Post.find({}).populate('user', '-password');
     return res.status(200).json({
      msg:'Post List',
      data:postData
    })

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Something went wrong",
      status: false,
    });
  }
}
