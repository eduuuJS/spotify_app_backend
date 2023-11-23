import { Controller, Get, Post, Body, Param, Put, ParseUUIDPipe } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { LikeOrDislikeSongDto } from './dto/like_or_dislike_song.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Songs')
@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post('/create')
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Get('/list')
  findAll() {
    return this.songService.findAll();
  }

  @Put('like/:id')
  likeOrDislike(@Param('id', ParseUUIDPipe) id: string, @Body() likeOrDislikeSongDto: LikeOrDislikeSongDto) {
    return this.songService.likeOrDislike(id, likeOrDislikeSongDto.liked);
  }

}
