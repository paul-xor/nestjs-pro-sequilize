import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com', description: 'Users email' })
  readonly email: string;
  @ApiProperty({ example: '1234', description: 'Password' })
  readonly password: string;
}
