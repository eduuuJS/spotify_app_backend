import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ILike } from 'typeorm';

@Injectable()
export class SongService {

  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
  ) {}

  async create(createSongDto: CreateSongDto) {
    const song = this.songRepository.create(createSongDto);
    await this.songRepository.save(song);
    return song;
  }

  async findAll() {
    return await this.songRepository.find();
  }

  async findByName(like: string) {
    return await this.songRepository.find({
      where: [
        { name: ILike(`%${like}%`) }
      ]
    });
  }

  async likeOrDislike(id: string, like: boolean) {
    const song = await this.songRepository.findOneBy({id});
    if (!song) {
      throw new NotFoundException(`Song with id ${id} not found`);
    }
    song.liked = like;
    await this.songRepository.save(song);
    return song;
  }

  async deleteAll(){
    await this.songRepository.clear();
  }
}
