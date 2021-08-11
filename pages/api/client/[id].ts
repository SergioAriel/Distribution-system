// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ClientID(req, res) {
  console.log(req.query.id);
  let client;
  switch (req.method) {
    case "GET":
      client = await prisma.client.findUnique({
        where: {
          id: req.query.id,
        },
      });
      res.status(200).json(client);
    case "PUT":
  }
}
