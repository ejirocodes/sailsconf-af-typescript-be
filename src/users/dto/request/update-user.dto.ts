import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
// PartialType
export class UpdateUserDto extends OmitType(CreateUserDto, [
  'password' as const,
  //   prevent password from being updated
]) {}
