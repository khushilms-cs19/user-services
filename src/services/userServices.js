let usersList = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
  }, 
];

const getAllUsers = ()=>{
  return usersList;
};

const getUser = (id)=>{
  return usersList.find(user => user.id === id);
};

const createUser = (userData)=>{
  const newUser = {
    id: usersList.length + 1,
    ...userData
  };
  usersList.push(newUser);
  return newUser;
};

const updateUser = (userId, userData)=>{
  const user = usersList.find(user => user.id === userId);
  if(!user) return null;
  const updatedUser = {
    ...user,
    ...userData,
  };
  usersList = usersList.map(user => user.id === userId ? updatedUser : user);
  return updatedUser;

};

const deleteUser = (userId)=>{
  const user = usersList.find(user => user.id === userId);
  if(!user) return null;
  usersList = usersList.filter(user => user.id !== userId); 
  return user;
};

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}

// module.exports = {
//   getAllUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser
// };
