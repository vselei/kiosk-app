import Head from 'next/head';

const Layout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Quiosque Cafeteria" />
      </Head>
      <div className='md:flex'>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
          <h1>Sidebar</h1>
        </aside>
        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
