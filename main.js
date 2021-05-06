song_h_p = "";
song_m_i ="";
function preload() {
    song_h_p = loadSound("music.mp3");
    song_m_i = loadSound("Mission Impossible.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}
function draw() {
    image(video, 0, 0, 600, 500);
}