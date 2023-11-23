import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class LikeOrDislikeSongDto {
    @ApiProperty({
        required: true,
    })
    @IsBoolean()
    liked: boolean;
}