import { Request, Response } from "express";
import FavoriteSong from "../../models/favorite-song.model";
import Song from "../../models/songs.model";
import Singer from "../../models/singer.model";

//[GET] /favorite-songs/
export const index = async (req: Request, res: Response) =>{
    const favoriteSongs = await FavoriteSong.find({
        // userId:
        deleted: false
    })
    for (const item of favoriteSongs) {
        const infoSong = await Song.findOne({
            _id: item.songId
        })
        const infoSinger = await Singer.findOne({
            _id: infoSong.singerId
        })
        item["infoSong"]=infoSong
        item["infoSinger"]=infoSinger
    }
    console.log(favoriteSongs)
    res.render("client/pages/favorite-songs/index", {
        pageTitle: "Bài hát yêu thích",
        favoriteSongs: favoriteSongs
    })
}