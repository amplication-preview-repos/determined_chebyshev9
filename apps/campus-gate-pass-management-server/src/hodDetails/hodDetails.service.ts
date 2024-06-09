import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HodDetailsServiceBase } from "./base/hodDetails.service.base";

@Injectable()
export class HodDetailsService extends HodDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
