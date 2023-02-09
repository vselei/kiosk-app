import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);

  const getCategories = async () => {
    const { data } = await axios('/api/categories');
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  const handleClickCategory = id => {
    const category = categories.filter(cat => cat.id === id);
    setCurrentCategory(category[0]);
  };

  const handleSetProduct = p => {
    setProduct(p);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  return (
    <KioskContext.Provider
      value={{
        categories,
        handleClickCategory,
        currentCategory,
        product,
        handleSetProduct,
        handleChangeModal,
        modal
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
