/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, HodDetails as PrismaHodDetails } from "@prisma/client";

export class HodDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.HodDetailsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.hodDetails.count(args);
  }

  async hodDetailsItems<T extends Prisma.HodDetailsFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HodDetailsFindManyArgs>
  ): Promise<PrismaHodDetails[]> {
    return this.prisma.hodDetails.findMany<Prisma.HodDetailsFindManyArgs>(args);
  }
  async hodDetails<T extends Prisma.HodDetailsFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HodDetailsFindUniqueArgs>
  ): Promise<PrismaHodDetails | null> {
    return this.prisma.hodDetails.findUnique(args);
  }
  async createHodDetails<T extends Prisma.HodDetailsCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HodDetailsCreateArgs>
  ): Promise<PrismaHodDetails> {
    return this.prisma.hodDetails.create<T>(args);
  }
  async updateHodDetails<T extends Prisma.HodDetailsUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HodDetailsUpdateArgs>
  ): Promise<PrismaHodDetails> {
    return this.prisma.hodDetails.update<T>(args);
  }
  async deleteHodDetails<T extends Prisma.HodDetailsDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HodDetailsDeleteArgs>
  ): Promise<PrismaHodDetails> {
    return this.prisma.hodDetails.delete(args);
  }
}
