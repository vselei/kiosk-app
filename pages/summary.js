import Layout from '@/layout/Layout';
import useKiosk from '@/hooks/useKiosk';
import ProductSummary from '@/components/ProductSummary';

const Summary = () => {
  const { order } = useKiosk();

  return (
    <Layout page="Resumo">
      <h1 className="text-4xl font-black">Resumo</h1>
      <p className="text-2xl my-10">Revisar pedido</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl">Você não tem pedidos</p>
      ) : (
        order.map(p => <ProductSummary key={p.id} product={p} />)
      )}
    </Layout>
  );
};

export default Summary;
