import User from '../models/User.js';

class UserDataSource {
  async getUsers() {
    return await User.find({});
  }

  async getUserById(id) {
    return await User.findById(id);
  }

  async createUser(userData) {
    const newUser = new User(userData);
    return await newUser.save();
  }

  async updateUser(id, userData) {
    return await User.findByIdAndUpdate(
      id,
      userData,
      { new: true, runValidators: true }
    );
  }

  async deleteUser(id) {
    const result = await User.findByIdAndDelete(id);
    return !!result;
  }
}

export default UserDataSource;