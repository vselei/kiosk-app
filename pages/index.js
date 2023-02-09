import Layout from '@/layout/Layout';
import useKiosk from '@/hooks/useKiosk';

export default function Home() {
  const { currentCategory } = useKiosk();

  return (
    <Layout page={`Menu ${currentCategory?.name}`}>
      <h1 className='text-4xl font-black'>{currentCategory?.name}</h1>
      <p className='text-2xl my-10'>Escolha e personalize seu pedido</p>
    </Layout>
  );
}
