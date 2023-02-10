import useKiosk from '@/hooks/useKiosk';
import Layout from '@/layout/Layout';
import { useCallback, useEffect } from 'react';

const Total = () => {
  const { order } = useKiosk();

  const proveOrder = useCallback(() => {
    return order.length === 0;
  }, [order]);

  useEffect(() => {
    proveOrder();
  }, [order, proveOrder]);

  const handlePutOrder = e => {
    e.preventDefault();
  };

  return (
    <Layout page="Confirmar Pedido">
      <h1 className="text-4xl font-black">Total e Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirme seu Pedido para Continuar</p>
      <form onSubmit={handlePutOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-cl"
          >
            Nome:
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 p-2 rounded-md "
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: <span className="font-bold">$200</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              proveOrder() ? 'bg-amber-200' : 'bg-amber-600 hover:bg-amber-800'
            } w-full lg:w-auto px-5 py-2 rounded-md uppercase font-bold text-white text-center cursor-pointer`}
            value="Confirmar"
            disabled={proveOrder()}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Total;
