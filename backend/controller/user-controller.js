import Journal from "../models/journalModel.js";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';


// User Signup
// User Signup
export const userSignup = async (req, res) => {
  try {
    let exist = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }]
    });
    if (exist) {
      return res.status(409).json({ msg: 'Username or email already exists!' });
    }

    const newUser = new User(req.body); // no file handling here
    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



// User Login

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { username } = req.params;

    // Find the user by username
    const user = await User.findOneAndDelete({ username });
    console.log(user);
    if (!user) {
      return res.status(404).json({ msg: 'User not found!' });
    }

    // Delete all journals associated with the user
    await Journal.deleteMany({ _id: { $in: user.journals } });

    return res.status(200).json({ msg: 'User and associated journals deleted successfully!' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export const updateUser = async (req, res) => {
  try {
    const { username } = req.params;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ msg: 'No data provided to update!' });
    }

    const allowedUpdates = ['name', 'email', 'bio', 'password', 'age', 'gender'];

    const updates = Object.keys(req.body);
    const isValidUpdate = updates.every(update => allowedUpdates.includes(update));

    if (!isValidUpdate) {
      return res.status(400).json({ msg: 'Invalid updates!' });
    }

    // Hash the password if it needs to be updated
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const user = await User.findOneAndUpdate({ username }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ msg: 'User not found!' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: error.message });
  }
};




export const getUserDetails = async (req, res) => {
  try {
    // Find the user based on the username provided in the request parameters
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      // If user not found, send 404 status with error message
      return res.status(404).json({ error: 'User not found' });
    }

    // If user found, send user details in the response
    res.json(user);
  } catch (error) {
    // If any error occurs, send 500 status with error message
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};