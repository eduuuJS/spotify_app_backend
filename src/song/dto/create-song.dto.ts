import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateSongDto {

    @ApiProperty({
        required: true,
    })
    @IsString()
    name: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    artist: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    hrefPhoto: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    color: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    hrefSound: string;

    @ApiProperty({
        required: true,
    })
    @IsOptional()
    @IsBoolean()
    liked?: boolean;

}