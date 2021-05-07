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
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("Moodeel Loodaad");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
    }
}
function draw() {
    image(video, 0, 0, 600, 500);
}