import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});

  const getCategories = async () => {
    const { data } = await axios('/api/categories');
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleClickCategory = id => {
    const category = categories.filter(cat => cat.id === id);
    setCurrentCategory(category[0]);
  };

  return (
    <KioskContext.Provider
      value={{
        categories,
        handleClickCategory,
        currentCategory
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
