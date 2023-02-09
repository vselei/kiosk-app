import { moneyFormatter } from '@/helpers';
import useKiosk from '@/hooks/useKiosk';
import Image from 'next/image';

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useKiosk();
  const { name, price, image } = product;

  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${image}.jpg`}
        alt={`Prato ${name}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {moneyFormatter(price)}
        </p>
        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-600 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Product;
