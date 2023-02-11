import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    // cria novos pedidos
    const order = await prisma.order.create({
      data: {
        order: req.body.order,
        name: req.body.name,
        total: req.body.total,
        date: req.body.date
      }
    });

    res.status(200).json(order);
  } else if (req.method === 'GET') {
    // Adquirir pedidos
    const orders = await prisma.order.findMany({
      where: {
        state: false
      }
    });

    res.status(200).json(orders);
  }
}
