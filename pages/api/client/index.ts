import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from "@octokit/core";


const octokit = new Octokit({
  auth: "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",
});



const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function Client(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
    let client = await prisma.client.create({
        data: {
          id: "string",
          nameContact: "asd",
          RS: "asd",
          email: "asdasd",
          bussines: "asdasd",
          phone: 16516,
          permission: "asda",
          regAFIP: "asdsd",
          PC: 165,
          deliveryAddress: "asda",
          images: [],
        },
      }
      );
      res.status(200).json(client);
      console.log(client)
      return;
    case "GET":
      await prisma.client.findMany();
      console.log(client);
      res.status(200).json(client);
      return;
  }
}
