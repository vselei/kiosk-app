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

  const calcProgress = () => {
    if (router.pathname === '/') {
      return 5
    } else if (router.pathname === '/summary') {
      return 50
    } else {
      return 100;
    }
  };

  return (
    <>
      <div className="flex justify-between mb-5 flex-col md:flex-row space-y-2 md:space-y-0">
        {steps.map(step => (
          <button
            onClick={() => {
              router.push(step.url);
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
