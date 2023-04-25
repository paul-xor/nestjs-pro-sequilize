import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com', description: 'Users email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ example: '1234', description: 'Password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Length should be min 4 and max 16' })
  readonly password: string;
}
