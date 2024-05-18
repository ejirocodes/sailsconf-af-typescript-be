import { $Enums, User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  email: string;
  name: string;
  role: $Enums.Role;
}
