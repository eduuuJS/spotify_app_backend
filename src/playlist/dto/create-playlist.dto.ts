import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, Validate, ValidationArguments } from "class-validator";



export class CreatePlaylistDto {

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    autor: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    color: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    hrefPhoto: string;

    @ApiProperty({
        required: true,
    })
    @IsArray()
    @IsString({ each: true })
    songs: string[];
}