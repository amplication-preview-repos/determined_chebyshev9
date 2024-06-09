import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HodDetailsModuleBase } from "./base/hodDetails.module.base";
import { HodDetailsService } from "./hodDetails.service";
import { HodDetailsController } from "./hodDetails.controller";
import { HodDetailsResolver } from "./hodDetails.resolver";

@Module({
  imports: [HodDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [HodDetailsController],
  providers: [HodDetailsService, HodDetailsResolver],
  exports: [HodDetailsService],
})
export class HodDetailsModule {}
