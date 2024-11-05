import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateDirectoryDto {

    @ApiProperty({ example: 'Nombre del directorio' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'Emails' })
    @IsString({ each: true })
    @IsEmail({},{each:true})
    @IsNotEmpty({ each: true })
    emails: string[];
}
