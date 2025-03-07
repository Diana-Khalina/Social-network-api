const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().populate('thoughts friends');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId).populate('thoughts friends');
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and associated thoughts deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const { userId, friendId } = req.params;
      const user = await User.findById(userId);
      const friend = await User.findById(friendId);

      if (!user || !friend) {
        return res.status(404).json({ message: "User or Friend not found!" });
      }

      user.friends.push(friendId);
      await user.save();

      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async removeFriend(req, res) { 
    try {
      const { userId, friendId } = req.params;
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      user.friends = user.friends.filter(friend => friend.toString() !== friendId);
      await user.save();

      res.json({ message: "Friend removed successfully", user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
