const User = require("../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        msg: "All fields are required",
        status: false,
      });
    }
    const hashPass = await bcrypt.hashSync(password, 10);
    const userData = await User.findOne({ email: email });
    if (userData) {
      return res.status(400).json({
        msg: "User Already Exists!",
        status: false,
      });
    }
    const createUser = await User.create({
      email: email,
      name: name,
      password: hashPass,
    });
    const token = jwt.sign(
      {
        id: createUser._id,
        email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "5d" }
    );
    return res.status(200).json({
      msg: "User Created Successfully",
      status: true,
      token: token,
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Something Went wrong",
      err: error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email: email });
    if (!userData) {
      return res.status(400).json({
        msg: "User not found",
        status: false,
      });
    }
    const passComp = await bcrypt.compare(password, userData.password);
    if (!passComp) {
      return res.status(400).json({
        msg: "Email or Password is incorrect",
        status: false,
      });
    }
    const token = jwt.sign(
      {
        id: userData._id,
        email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "5d" }
    );
    return res.status(200).json({
      msg: "User Login Successfully",
      status: true,
      token: token,
    });
  } catch (error) {
    console.log
    return res.status(400).json({
      msg: "Something Went wrong",
      err: error,
    });
  }
};

