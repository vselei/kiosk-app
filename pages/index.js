import { PrismaClient } from '@prisma/client';

export default function Home({ categories }) {
  console.log(categories);
  return <h1>Hello World</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany();

  console.log(categories);

  return {
    props: {
      categories
    }
  };
};
