import useKiosk from '@/hooks/useKiosk';
import Image from 'next/image';
import Category from './Category';

const Sidebar = () => {
  const { categories } = useKiosk();

  return (
    <>
      <Image width={150} height={100} src="/assets/img/logo.svg" alt="Logo" />
      <nav className="mt-20">
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
