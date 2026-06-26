import { useState } from 'react';

const useAuth = () => {
  return { 
    user: null, 
    loading: false, 
    login: () => {}, 
    logout: () => {}, 
    register: () => {} 
  };
};

export default useAuth;
