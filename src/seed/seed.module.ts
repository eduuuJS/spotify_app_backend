import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { SongModule } from 'src/song/song.module';
import { PlaylistModule } from 'src/playlist/playlist.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [SongModule, PlaylistModule]
})
export class SeedModule {}
