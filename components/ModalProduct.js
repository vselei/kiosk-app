import { useState } from 'react';

import Image from 'next/image';

import useKiosk from '@/hooks/useKiosk';

import { moneyFormatter } from '@/helpers';

const ModalProduct = () => {
  const [qty, setQty] = useState(1);

  const { product, handleChangeModal, handleSetOrder } = useKiosk();

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Produto ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {moneyFormatter(product.price)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (qty <= 1) {
                return;
              }
              setQty(qty - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{qty}</p>
          <button
            type="button"
            onClick={() => {
              if (qty >= 5) {
                return;
              }
              setQty(qty + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-600 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleSetOrder({ ...product, qty })}
        >
          Adicionar pedido
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
