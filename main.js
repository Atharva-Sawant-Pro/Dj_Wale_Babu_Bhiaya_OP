song_h_p = "";
song_m_i ="";
song_status_h_p ="";
song_status_m_i =""
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
score_leftWrist=0;
score_rightWrist=0;
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

        score_leftWrist=results[0].pose.keypoints[9].score;
        score_rightWrist=results[0].pose.keypoints[10].score;

        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        console.log("score_leftWrist="+score_leftWrist+"score_rightWrist="+score_rightWrist);
    }
}
function draw() {
    image(video, 0, 0, 600, 500);   
    song_status_m_i=song_m_i.isPlaying();
    console.log(song_status_m_i);
    fill("red");
    stroke("red");
    if(score_leftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song_h_p.stop();
        if(song_status_m_i==false){
            song_m_i.play();
            document.getElementById("song_name").innerHTML="Mission Impossible";
        }
    }
    fill("green");
    stroke("green");
    song_status_h_p=song_h_p.isPlaying();
    if(score_rightWrist>0.2){   
        circle(rightWristX,rightWristY,20);
        song_m_i.stop();
        if(song_status_h_p==false){
            song_h_p.play();
            document.getElementById("song_name").innerHTML="Harry Potter DJ Version";
        }
    }


}