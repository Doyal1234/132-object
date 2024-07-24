function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("status").innerHTML="Status:Detected Object";
    }
    
    img="";
    status="";
    
    function preload() {
    img=loadImage("Bottles.jpeg");
    }
    
    function modalLoaded(){
    console.log("Modal loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
    }

    function draw() {
        image(img,0,0,640,420);
    }