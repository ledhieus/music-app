import { Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/songs.model";
import Singer from "../../models/singer.model";

//[GET] /topics/
export const list = async (req: Request, res: Response) =>{
    const topic = await Topic.findOne({
        deleted: false,
        status: "active",
        slug: req.params.slugTopic
    })
    const songs = await Song.find({
        topicId: topic.id,
        deleted: false,
        status: "active",
    }).select("avatar title slug singerId like")
    
    for (const song of songs) {
        const infoSinger = await Singer.findOne({
            _id: song.singerId,
            deleted: false,
            status: "active",
        })
        song["infoSinger"] = infoSinger
    }

    res.render("client/pages/songs/list", {
        pageTitle: topic.title,
        songs: songs
    })
}