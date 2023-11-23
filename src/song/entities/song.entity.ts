import { Playlist } from "src/playlist/entities/playlist.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreateSongDto } from "../dto/create-song.dto";

@Entity("songs")
export class Song {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    artist: string;

    @Column('text')
    hrefPhoto: string;

    @Column('text')
    hrefSound: string;

    @Column('bool', {
        default: true
    })
    liked: boolean;

    @Column('numeric')
    plays: number;

    @ManyToMany(() => Playlist, playlist => playlist.songs)
    playlist: Playlist[];

}