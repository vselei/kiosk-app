import Head from 'next/head';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Quiosque Cafeteria" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Image
            width={150}
            height={100}
            src="/assets/img/logo.svg"
            alt="logo"
            className='block mx-auto'
          />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminLayout;
