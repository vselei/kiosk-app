import useSWR from 'swr';
import AdminLayout from '@/layout/AdminLayout';
import axios from 'axios';
import Order from '@/components/Order';

const Admin = () => {
  const fetcher = () => axios('/api/orders').then(data => data.data);
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {
    refreshInterval: 100
  });
  console.log(data);

  return (
    <AdminLayout page="Admin">
      <h1 className="text-4xl font-black">Painel de Administração</h1>
      <p className="text-2xl my-10">Administrar Pedidos</p>

      {data && data.length ? (
        data.map(order => <Order key={order.id} order={order} />)
      ) : (
        <p>Não possui pedidos pendentes</p>
      )}
    </AdminLayout>
  );
};

export default Admin;
