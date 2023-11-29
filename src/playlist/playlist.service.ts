import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entities/playlist.entity';
import { In, Repository } from 'typeorm';
import { Song } from 'src/song/entities/song.entity';

@Injectable()
export class PlaylistService {

  constructor(
    @InjectRepository(Playlist)
    private readonly playlistRepository: Repository<Playlist>,
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
  ) {}

  async findAll() {
    return await this.playlistRepository.find();
  }

  async findAllWithDetail() {
    return await this.playlistRepository.find({ relations: ['songs']});
  }

  async findDetail(id: string) {
    const playlist = await this.playlistRepository.findOne({ where: { id }, relations: {
      songs: true
    } });
    return playlist;
  }

  async create(createPlaylistDto: CreatePlaylistDto) {
    const { name, autor, description, color, hrefPhoto, songs } = createPlaylistDto;
    const songsFinded = await this.songRepository.findBy({id: In(songs)});
    const playlist = new Playlist();

    playlist.name = name;
    playlist.autor = autor;
    playlist.description = description;
    playlist.color = color;
    playlist.hrefPhoto = hrefPhoto;
    playlist.songs = songsFinded;

    const savedPlaylist = await this.playlistRepository.save(playlist);
    return savedPlaylist;
  }

  async deleteAll(){
    await this.playlistRepository.clear();
  }
}

