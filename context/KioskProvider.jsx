import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);

  const router = useRouter();

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

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => total + product.price * product.qty,
      0
    );

    setTotal(newTotal);
  }, [order]);

  const handleClickCategory = id => {
    const category = categories.filter(cat => cat.id === id);
    setCurrentCategory(category[0]);
    router.push('/');
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

  const handleEditQty = id => {
    const productUpdate = order.filter(p => p.id === id);
    setProduct(productUpdate[0]);
    setModal(!modal);
  };

  const handleDeleteProduct = id => {
    const updatedOrder = order.filter(p => p.id !== id);
    setOrder(updatedOrder);
  };

  const handlePutOrder = async e => {
    e.preventDefault();

    try {
      await axios.post('/api/orders', {
        order,
        name,
        total,
        date: Date.now().toString()
      });

      // reset app
      setCurrentCategory(categories[0]);
      setOrder([]);
      setName('');
      setTotal(0);

      toast.success('Pedido realizado corretamente!');
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.log(error);
    }
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
        order,
        handleEditQty,
        handleDeleteProduct,
        name,
        setName,
        handlePutOrder,
        total
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
