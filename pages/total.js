import { moneyFormatter } from '@/helpers';
import useKiosk from '@/hooks/useKiosk';
import Layout from '@/layout/Layout';
import { useCallback, useEffect } from 'react';

const Total = () => {
  const { order, name, setName, handlePutOrder,total } = useKiosk();

  const proveOrder = useCallback(() => {
    return order.length === 0 || name === '' || name.length < 3;
  }, [order, name]);

  useEffect(() => {
    proveOrder();
  }, [order, proveOrder]);

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
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: <span className="font-bold">{moneyFormatter(total)}</span>
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
