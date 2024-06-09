import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HodDetailsService } from "./hodDetails.service";
import { HodDetailsControllerBase } from "./base/hodDetails.controller.base";

@swagger.ApiTags("hodDetails")
@common.Controller("hodDetails")
export class HodDetailsController extends HodDetailsControllerBase {
  constructor(
    protected readonly service: HodDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
