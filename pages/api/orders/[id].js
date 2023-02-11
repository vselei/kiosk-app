import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.query;
    const prisma = new PrismaClient();
    const updatedOrder = await prisma.order.update({
      where: { id: parseInt(id) },
      data: {
        state: true
      }
    });
    res.status(200).json(updatedOrder);
  }
}
