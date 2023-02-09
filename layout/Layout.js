import ModalProduct from '@/components/ModalProduct';
import Sidebar from '@/components/Sidebar';
import useKiosk from '@/hooks/useKiosk';
import Head from 'next/head';
import ReactModal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

ReactModal.setAppElement('#__next');

const Layout = ({ children, page }) => {
  const { modal } = useKiosk();
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

      {modal && (
        <ReactModal isOpen={modal} style={customStyles}>
          <ModalProduct />
        </ReactModal>
      )}

      <ToastContainer />
    </>
  );
};

export default Layout;
