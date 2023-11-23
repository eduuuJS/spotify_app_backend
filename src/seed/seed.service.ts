import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from 'src/playlist/dto/create-playlist.dto';
import { PlaylistService } from 'src/playlist/playlist.service';
import { CreateSongDto } from 'src/song/dto/create-song.dto';
import { SongService } from 'src/song/song.service';

@Injectable()
export class SeedService {

  constructor(private readonly songService: SongService, private readonly playlistService: PlaylistService) {}

  async executeSeed() {
    let result = await this.createSongs();
    await this.createPlaylists(result);
    return "Seed executed";
  }

  async clearDatabase(){
    await this.songService.deleteAll();
    await this.playlistService.deleteAll();
  }

  async createSongs() : Promise<string[]>{
    let idsCreated = [];
    for (let i = 0; i < listSongs.length; i++) {
      const song = listSongs[i];
      const result = await this.songService.create(song);
      idsCreated.push(result.id);
    } 
    return idsCreated;
  }

  async createPlaylists(idsCreated : string[]) {    
      let listPlaylists = this.generateListPlaylists(idsCreated);  
      for (let i = 0; i < listPlaylists.length; i++) {
        let playlist = listPlaylists[i];
        await this.playlistService.create(playlist);
      }
  }

  generateListPlaylists(idsCreated : string[]) : CreatePlaylistDto[]{
    let listPlaylists : CreatePlaylistDto[] = [
      {
        name: "Feel It Again",
        autor: "Spotify",
        description: "string",
        color: "string",
        songs: [idsCreated[0], idsCreated[1], idsCreated[2], idsCreated[3], idsCreated[4], idsCreated[5], idsCreated[6], idsCreated[7], idsCreated[8]]
      },
      {
        name: "A State Of Trance TOP 10",
        autor: "Armin Van Buuren",
        description: "string",
        color: "string",
        songs: [idsCreated[9], idsCreated[10], idsCreated[11], idsCreated[12], idsCreated[13], idsCreated[14], idsCreated[15], idsCreated[16], idsCreated[17], idsCreated[18]]
      },
    ];

    return listPlaylists;
  }


}

let listSongs : CreateSongDto[] = [
  {
    name : "Bromance",
    artist : "Avicci",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273059fc1c7a6a477c625ac1300",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "I Feel (feat. Karmatek)",
    artist : "JETFIRE, Qulinez, Karmatek",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2732f3dc8741a4064108e34ead7",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "High On Life (feat. Bonn)",
    artist : "Martin Garrix, Bonn",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273c6f9783d7f7670d09454ef71",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Hurricane",
    artist : "Martin Garrix, Sentinel, Bonn",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2737993573de9a95edee577f04d",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "New Memories",
    artist : "Dubvision, AFROJACK",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273fc188344cba643e3cd23e11d",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Anywhere With You",
    artist : "AFROJACK, Lucas & Steve, Dubvision",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2732028367e5c1f2cd913170fa1",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Sunrise",
    artist : "ARTY, April Bender",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273a6862567ab8e9a348498f830",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Runaway ( U & I )",
    artist : "Galantis",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2732b517912fd69652ff10d8e11",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Don't You Worry Child",
    artist : "Swedish House Mafia, John Martin",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2739cfe80c0c05ce104f7bab18e",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Shivers",
    artist : "Armin Van Buuren, Susana",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Adagio For Strings",
    artist : "Tiesto",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Tuvan",
    artist : "GAIA",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Communication",
    artist : "Armin Van Buuren",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Anahera",
    artist : "Ferry Corsten, Gouryella",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "RAMsterdam (Jorn Van Deynhoven Remix)",
    artist : "RAM, Jorn Van Deynhoven",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Concrete Angel",
    artist : "Gareth Emery, Christina Novelli",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "RAMelia (Tribute To Amelia)",
    artist : "RAM, Susana",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "For An Angel",
    artist : "Paul Van Dyk,",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
  {
    name : "Universal Nation",
    artist : "Push",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b9b6b9b5b6b9b6b9",
    hrefSound : "https://p",
    liked : false,
    plays : 25000
  },
];
