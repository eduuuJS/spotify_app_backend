import { Song } from "src/song/entities/song.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("playlists")
export class Playlist {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    autor: string;

    @Column('text')
    description: string;

    @Column('text')
    color: string;

    @Column('text')
    hrefPhoto: string;

    @ManyToMany(() => Song, song => song.playlist)
    @JoinTable({
        name: 'playlists_songs',
        joinColumn: {
            name: 'playlist_id',
        },
        inverseJoinColumn: {
            name: 'song_id',
        }
    })
    songs: Song[];

}