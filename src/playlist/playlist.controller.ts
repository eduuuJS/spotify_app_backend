import { Controller, Post, Body, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Playlist')
@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post('/create')
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistService.create(createPlaylistDto);
  }

  @Get('/list')
  findAll() {
    return this.playlistService.findAll();
  }

  @Get('/detail')
  findAllWithDetail() {
    return this.playlistService.findAllWithDetail();
  }

  @Get('/detail/:id')
  findDetail(@Param('id', ParseUUIDPipe) id: string) {
    return this.playlistService.findDetail(id);
  }
}
