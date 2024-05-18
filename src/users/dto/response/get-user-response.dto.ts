import { UserEntity } from '../../entities/user.entity';

export class GetAllUserResponseDto {
  message: string;
  data: UserEntity[];
}
