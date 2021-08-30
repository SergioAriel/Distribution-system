import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

export default async function Product(req: NextApiRequest, res: NextApiResponse) {
  let client;
  let image;
  switch (req.method) {
    case "POST":
      client = await prisma.client.create({
        data: {
          nameContact: "asd",
          RS: "asd",
          email: "asdasd",
          bussines: "asdasd",
          phone: 16516,
          permission: "asda",
          regAFIP: "asdsd",
          PC: 165,
          images: image,
          deliveryAddress: "asda",
          employees: {
            create:[

            ] 
          }
        },
      });
      console.log(client);
      res.status(200).json(client);
      return;
    case "GET":
      client = await prisma.client.findMany();
      console.log(client);
      res.status(200).json(client);
      return;
  }
}
