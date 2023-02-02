const userServices = require('../services/userServices');

const getAllUsers = (req,res)=>{
  const users = userServices.getAllUsers();
  res.status(200).json(users);
};

const getUser = (req,res)=>{
  const {id} = req.params;
  const user = userServices.getUser(Number(id));
  res.status(200).json(user);
};

const createUser = (req,res)=>{
  const user = userServices.createUser(req.body);
  res.status(201).json(user);
};

const updateUser = (req,res)=>{
  const {id} = req.params;
  const user = userServices.updateUser(id, req.body);
  res.status(200).json({
    message: 'user updated',
    data: user,
  });
};

const deleteUser = (req,res)=>{
  const {id} = req.params;
  const user = userServices.deleteUser(Number(id));
  res.status(200).json({
    message: 'user deleted',
    data: user,
  });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
