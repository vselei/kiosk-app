import Sidebar from '@/components/Sidebar';
import Head from 'next/head';

const Layout = ({ children, page }) => {
  const message = `Café - ${page}`;

  return (
    <>
      <Head>
        <title>{message}</title>
        <meta name="description" content="Quiosque Cafeteria" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 flex flex-col items-center">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10 mt-10">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
