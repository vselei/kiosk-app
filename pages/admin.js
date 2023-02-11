import AdminLayout from '@/layout/AdminLayout';

const Admin = () => {
  return (
    <AdminLayout page="Admin">
      <h1 className="text-4xl font-black">Painel de Administração</h1>
      <p className="text-2xl my-10">Administrar Pedidos</p>
    </AdminLayout>
  );
};

export default Admin;
