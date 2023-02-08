import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const { data } = await axios('/api/categories');
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <KioskContext.Provider
      value={{
        categories
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
