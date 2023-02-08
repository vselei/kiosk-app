import Image from 'next/image';

const Sidebar = () => {
  return (
    <div>
      <Image width={300} height={100} src="/assets/img/logo.svg" alt="Logo" />
    </div>
  );
};

export default Sidebar;
