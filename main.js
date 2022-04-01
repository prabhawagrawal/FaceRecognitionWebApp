Webcam.set({
    width: 350,
    height: 300,
    img_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src="+data_uri+">"
    });
}

console.log("ML5 Version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yFu25373C/model.json", modelLoaded)

function modelLoaded(){
    console.log("Model is Loaded!")
}