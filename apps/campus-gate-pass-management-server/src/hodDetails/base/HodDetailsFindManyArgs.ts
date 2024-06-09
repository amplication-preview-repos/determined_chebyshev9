/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HodDetailsWhereInput } from "./HodDetailsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HodDetailsOrderByInput } from "./HodDetailsOrderByInput";

@ArgsType()
class HodDetailsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HodDetailsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HodDetailsWhereInput, { nullable: true })
  @Type(() => HodDetailsWhereInput)
  where?: HodDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: [HodDetailsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HodDetailsOrderByInput], { nullable: true })
  @Type(() => HodDetailsOrderByInput)
  orderBy?: Array<HodDetailsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HodDetailsFindManyArgs as HodDetailsFindManyArgs };
