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
  return (
    <>
      <div className="flex justify-between">
        {steps.map(step => (
          <button className="text-2xl font-bold" key={step.step}>{step.name}</button>
        ))}
      </div>
    </>
  );
};

export default Steps;
