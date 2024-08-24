import { Request, Response } from "express";
import Song from "../../models/songs.model";

//[GET] /admin/songs
export const index = async (req: Request, res: Response) =>{
    const songs = await Song.find({
        deleted: false
    })
    res.render("admin/pages/song/index", {
        pageTitle: "Quản lý bài hát",
        songs: songs
    })
}