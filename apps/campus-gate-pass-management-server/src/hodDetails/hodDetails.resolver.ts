import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HodDetailsResolverBase } from "./base/hodDetails.resolver.base";
import { HodDetails } from "./base/HodDetails";
import { HodDetailsService } from "./hodDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HodDetails)
export class HodDetailsResolver extends HodDetailsResolverBase {
  constructor(
    protected readonly service: HodDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
