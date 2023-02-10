import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    const order = await prisma.order.create({
      data: {
        order: req.body.order,
        name: req.body.name,
        total: req.body.total,
        date: req.body.date
      }
    });

    res.json(order);
  }
}
