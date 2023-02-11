import { moneyFormatter } from '@/helpers';
import Image from 'next/image';

const Order = ({ order }) => {
  const { id, name, total, order: o } = order;

  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Pedido #{id}</h3>
      <p className="text-lg font-bold">Cliente: {name}</p>

      <div>
        {o.map(plate => (
          <div
            key={plate.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${plate.image}.jpg`}
                alt={`Prato ${plate.name}`}
              />
            </div>

            <div className="p-5 space-y-2">
              <h4 className="text-cl font-bold text-amber-500">{plate.name}</h4>
              <p className="text-lg font-bold">Quantidade: {plate.qty}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total a pagar: {moneyFormatter(total)}
        </p>
      </div>
    </div>
  );
};

export default Order;
