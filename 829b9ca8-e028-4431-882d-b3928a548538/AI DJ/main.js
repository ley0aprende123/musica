//sirve para modificar la musica despues
song = "";

leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;

//esta funcion sirve para cargar la musica
function preload(){
song = loadSound("music.mp3")
}
//esta funcion sirve para crear el canvas  
function setup(){
canvas = createCanvas(600,500);
canvas.center();
//esta funcion sirve para encender la camara
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftX = results[0].pose.leftWrist.x;
    leftY = results[0].pose.leftWrist.y;
    console.log("Posicion muñeca izquierda en X = " + leftX);
    console.log("Posicion muñeca izquierda en Y = " + leftY);

    rightX = results[0].pose.rightWrist.x;
    rightY = results[0].pose.rightWrist.y;
    console.log("Posicion muñeca derecha en X = " + rightX);
    console.log("Posicion muñeca derecha en Y = " + rightY);
    
    }


}

function modelLoaded(){
    console.log("El modelo se cargo con éxito");
}
//esta funcion sirve para mostrar la camara
function draw(){
image(video,0,0,600,500);
}
//esta funcion sirve para reproducir el sonido
function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1)
}