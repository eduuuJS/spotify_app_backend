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
        color: "Color(0xfff224aa)",
        hrefPhoto: "https://i.scdn.co/image/ab67616d0000b2732f3dc8741a4064108e34ead7",
        songs: [idsCreated[0], idsCreated[1], idsCreated[2], idsCreated[3], idsCreated[4], idsCreated[5], idsCreated[6], idsCreated[7], idsCreated[8]]
      },
      {
        name: "A State Of Trance TOP 10",
        autor: "Armin Van Buuren",
        description: "string",
        color: "Color(0xff105bde)",
        hrefPhoto: "https://i.scdn.co/image/ab67706c0000da84225e2fc4cbd3dcd1386fda5d",
        songs: [idsCreated[9], idsCreated[10], idsCreated[11], idsCreated[12], idsCreated[13], idsCreated[14], idsCreated[15], idsCreated[16], idsCreated[17], idsCreated[18]]
      },
      {
        name: "Power of Rock",
        autor: "Universal Group",
        description: "string",
        color: "Color(0xffd42424)",
        hrefPhoto: "https://i.scdn.co/image/ab67616d00001e022ffdc5a3fe467d15b114f217",
        songs: [idsCreated[19], idsCreated[20], idsCreated[21], idsCreated[22], idsCreated[23], idsCreated[24], idsCreated[25]]
      },
      {
        name: "Hip Hop Party",
        autor: "spotify",
        description: "string",
        color: "Color(0xffd20042)",
        hrefPhoto: "https://i.scdn.co/image/ab67706f000000020892a338216da10ae5a87e7b",
        songs: [idsCreated[26], idsCreated[27], idsCreated[28], idsCreated[29], idsCreated[30], idsCreated[31], idsCreated[32], idsCreated[33], idsCreated[34], idsCreated[35]]
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
    color : "Color(0xff7514c9)",
  },
  {
    name : "I Feel (feat. Karmatek)",
    artist : "JETFIRE, Qulinez, Karmatek",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2732f3dc8741a4064108e34ead7",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xfff29407)",
  },
  {
    name : "High On Life (feat. Bonn)",
    artist : "Martin Garrix, Bonn",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273c6f9783d7f7670d09454ef71",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff94f207)",
  },
  {
    name : "Hurricane",
    artist : "Martin Garrix, Sentinel, Bonn",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2737993573de9a95edee577f04d",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffd11f1f)",
  },
  {
    name : "New Memories",
    artist : "Dubvision, AFROJACK",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273fc188344cba643e3cd23e11d",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffff2994)",
  },
  {
    name : "Anywhere With You",
    artist : "AFROJACK, Lucas & Steve, Dubvision",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2732028367e5c1f2cd913170fa1",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff2219c2)",
  },
  {
    name : "Sunrise",
    artist : "ARTY, April Bender",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273a6862567ab8e9a348498f830",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff9128ed)",
  },
  {
    name : "Runaway ( U & I )",
    artist : "Galantis",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2732b517912fd69652ff10d8e11",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff1e78bd)",
  },
  {
    name : "Don't You Worry Child",
    artist : "Swedish House Mafia, John Martin",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2739cfe80c0c05ce104f7bab18e",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff1ff0e2)",
  },
  {
    name : "Shivers",
    artist : "Armin Van Buuren, Susana",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2732c89578bbd248154c7b1c213",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffcd52e3)",
  },
  {
    name : "Adagio For Strings",
    artist : "Tiesto",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2737c5d53a0484beb398b5da7ed",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff33ffe0)",
  },
  {
    name : "Tuvan",
    artist : "GAIA",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273422e8e5f8a7a986906bdfc6c",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffd62a24)",
  },
  {
    name : "Communication",
    artist : "Armin Van Buuren",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2736984f19550559d89aafa9a5f",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff1818db)",
  },
  {
    name : "Anahera",
    artist : "Ferry Corsten, Gouryella",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273026deaa9f4c2956cda1a4eee",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff26adf0)",
  },
  {
    name : "RAMsterdam (Jorn Van Deynhoven Remix)",
    artist : "RAM, Jorn Van Deynhoven",
    hrefPhoto : "https://i.scdn.co/image/ab67616d00001e0294be39c563620aaef367306b",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff0f33ff)",
  },
  {
    name : "Concrete Angel",
    artist : "Gareth Emery, Christina Novelli",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2736fbf81c43f623d0d3bd0adab",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff1ac41a)",
  },
  {
    name : "RAMelia (Tribute To Amelia)",
    artist : "RAM, Susana",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273c5f85929d644ade165b34063",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff2873c9)",
  },
  {
    name : "For An Angel",
    artist : "Paul Van Dyk,",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273ea786b0e3ce24e27c2f88262",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffba2cf2)",
  },
  {
    name : "Universal Nation",
    artist : "Push",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273420b47bf52e7ed62a87b26c7",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff3226d4)",
  },
  {
    name : "Darkside",
    artist : "Bring Me The Horizon",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b27301aa13aa3a7c9f2df2db0d0f",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffb01eab)",
  },
  {
    name : "ONE MORE TIME",
    artist : "blink-182",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b27303e4cf0d29d2205b6abd5f11",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffb01ea5)",
  },
  {
    name : "Stuck",
    artist : "Thirty Seconds To Mars",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b27377252a2aed05bc40df26a8c0",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff209bd4)",
  },
  {
    name : "Angry",
    artist : "The Rolling Stones",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b27300379b8904a73a542198c068",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff40eb1a)",
  },
  {
    name : "Under You",
    artist : "Foo Fighters",
    hrefPhoto : "https://i.scdn.co/image/ab67616d00001e02d4bf9390b735800da93015a9",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff2718d6)",
  },
  {
    name : "Already Over",
    artist : "Mike Shinoda",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273c9b2b30f897fbdaa9574d89b",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff8f2afa)",
  },
  {
    name : "Landmines",
    artist : "sum 41",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b27367ca72aaa1818286d9daa0d1",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xfffad51e)",
  },
  {
    name : "rockstar (feat. 21 Savage)",
    artist : "Post Malone, 21 Savage",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff1db2f2)",
  },
  {
    name : "Lucid Dreams",
    artist : "Juice WRLD",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273c58698d14b372d042b6eeb05",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff492cf2)",
  },
  {
    name : "God's Plan",
    artist : "Drake",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff492cf2)",
  },
  {
    name : "SAD!",
    artist : "XXXTENTACION",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xffeb30fc)",
  },
  {
    name : "Lose Yourself",
    artist : "Eminem",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273b6ef2ebd34efb08cb76f6eec",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff2795f5)",
  },
  {
    name : "Unforgettable",
    artist : "French Montana, Swae Lee",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2738a31195a371b2233456f6c07",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff3226d4)",
  },
  {
    name : "Till I Collapse",
    artist : "Eminem Nate Dogg",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff3226d4)",
  },
  {
    name : "HIGHETS IN THE ROOM",
    artist : "Travis Scott",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273e42b5fea4ac4c3d6328b622b",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff27e362)",
  },
  {
    name : "Hotline Bling",
    artist : "Drake",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b27393d393bbc923a9e0e1ec77dd",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff3226d4)",
  },
  {
    name : "Stronger",
    artist : "Kanye West",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273006b6346d8486a3078bd6a85",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xff2ea0f2)",
  },
  {
    name : "In Da Club",
    artist : "50 Cent",
    hrefPhoto : "https://i.scdn.co/image/ab67616d0000b273f7f74100d5cc850e01172cbf",
    hrefSound : "https://p",
    liked : false,
    color : "Color(0xfff0000c)",
  },
];
