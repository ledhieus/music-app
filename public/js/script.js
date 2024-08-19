// APlayer
const aplayer = document.querySelector("#aplayer")
if (aplayer) {
    let dataSong = aplayer.getAttribute("data-song")
    dataSong = JSON.parse(dataSong)

    let dataSinger = aplayer.getAttribute("data-singer")
    dataSinger = JSON.parse(dataSinger)
    console.log(dataSong)
    console.log(dataSinger)

    const ap = new APlayer({
        container: aplayer,
        audio: [{
            name: dataSong.title,
            artist: dataSinger.fullName,
            url: '/public/audio',
            cover: dataSong.avatar
        }],
        autoplay: true
    });

    const avatar = document.querySelector(".singer-detail .inner-avatar")
    

    ap.on('play', function () {
        avatar.style.animationPlayState = "running"
    });

    ap.on('pause', function () {
        avatar.style.animationPlayState = "paused"
    });
}
// End APlayer
