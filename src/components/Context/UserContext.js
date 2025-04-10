import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const updateUser = (id, updatedData) => {
    setUsers(prev =>
      prev.map(user => (user.id === id ? { ...user, ...updatedData } : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, setUsers, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
