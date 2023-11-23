import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';

@Module({
  controllers: [SongController],
  providers: [SongService],
  imports: [
    TypeOrmModule.forFeature([ Song])
  ],
  exports: [
    SongService
  ]
})
export class SongModule {}
