import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savedTime = localStorage.getItem("videoplayer-current-time");


const parsedTime = JSON.parse(savedTime);

savedTime ? player.setCurrentTime(parsedTime) : player.setCurrentTime(0);

const onPlay = function (data) {
    const userTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(userTime));
    console.log(userTime);
};
player.on('timeupdate', throttle(onPlay, 1000));

