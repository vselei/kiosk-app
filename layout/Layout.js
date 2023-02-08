import Head from 'next/head';

const Layout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Quiosque Cafeteria" />
      </Head>
      <div className='md:flex'>
        <aside className='md:w-4/12'>
          <h1>Sidebar</h1>
        </aside>
        <main className='md:w-8/12'>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
