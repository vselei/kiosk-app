import useKiosk from '@/hooks/useKiosk';
import { useRouter } from 'next/router';

const steps = [
  {
    step: 1,
    name: 'Menu',
    url: '/'
  },
  {
    step: 2,
    name: 'Resumo',
    url: '/summary'
  },
  {
    step: 3,
    name: 'Dados e Total',
    url: '/total'
  }
];

const Steps = () => {
  const router = useRouter();

  const { handleChangeStep, step } = useKiosk();

  const calcProgress = () => {
    const percentage = (step / 3) * 100;
    return percentage;
  };

  return (
    <>
      <div className="flex justify-between mb-5 flex-col md:flex-row space-y-2 md:space-y-0">
        {steps.map(step => (
          <button
            onClick={() => {
              router.push(step.url);
              handleChangeStep(step.step);
            }}
            className="text-2xl font-bold"
            key={step.step}
          >
            {step.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{
            width: `${calcProgress()}%`
          }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
