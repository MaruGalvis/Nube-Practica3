import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateDirectoryDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString({ each: true })
    @IsEmail({},{each:true})
    @IsNotEmpty({ each: true })
    emails: string[];
}
