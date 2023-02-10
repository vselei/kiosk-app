import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

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

  const handleSetOrder = ({ categoryId, ...product }) => {
    if (order.some(o => o.id === product.id)) {
      const orderUpdated = order.map(p => (p.id === product.id ? product : p));
      setOrder(orderUpdated);
      toast.success('Salvo com Sucesso');
    } else {
      setOrder([...order, product]);
      toast.success('Adicionado ao Pedido');
    }

    setModal(false);
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
        modal,
        handleSetOrder,
        order
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
