import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { SongModule } from 'src/song/song.module';
import { Song } from 'src/song/entities/song.entity';

@Module({
  controllers: [PlaylistController],
  providers: [PlaylistService],
  imports: [
    TypeOrmModule.forFeature([ Playlist]),
    TypeOrmModule.forFeature([ Song])
  ],
  exports: [
    PlaylistService
  ]
})
export class PlaylistModule {}
