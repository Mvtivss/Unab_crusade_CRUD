const userRepository = require('../repositories/userRepository');

const createUser = async (userData) => {
  return await userRepository.createUser(userData);
};

const getUserById = async (id) => {
  return await userRepository.getUserById(id);
};

const updateUser = async (id, userData) => {
  return await userRepository.updateUser(id, userData);
};

const deleteUser = async (id) => {
  return await userRepository.deleteUser(id);
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};