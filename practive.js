document.getElementById('bao').innerHTML = 'TRU AN BAO';


document.getElementById('bao').onclick = () =>{
    document.getElementById('bao').style.fontSize = '50px';
    document.getElementById('bao').style.color = 'blue';
    document.getElementById('bao').onclick = ()=>{
        document.getElementById('bao').style.color = 'black';
        document.getElementById('bao').style.margin = '300px 0 0 0';
        document.getElementById('bao').onclick = ()=>{
            document.getElementById('bao').style.margin = '100px 0px 100px 0';
            document.getElementById('bao').style.fontSize = '1px';
            document.getElementById('bao').onclick = () =>{
                document.getElementById('bao').style.color = 'white';
            }
        }
    }
}

var text ="";
var x = document.forms["formText"];
for(let i =0; i<x.length;i++){
    text += x.elements[i].value + " ";
}
document.getElementById("copy").innerHTML = 'this is a collections ' + text;


var x = document.getElementById("main");
var y = x.getElementsByTagName("p");

document.getElementById("copy1").innerHTML = 'This is a copy '+ y[1].innerHTML;


document.getElementById("date").innerHTML = 'Date: ' + Date();

function actionAlignContentBetween(){
    document.getElementById("blockMain").style.alignContent = "space-between";
}
function actionAlignContentAround(){
    document.getElementById("blockMain").style.alignContent = "space-around";
}
function actionAlignContentStretch(){
    document.getElementById("blockMain").style.alignContent = "stretch";
}
function actionAlignContentCenter(){
    document.getElementById("blockMain").style.alignContent = "center";
}
function actionAlignContentFlexStart(){
    document.getElementById("blockMain").style.alignContent = "flex-start";
}
function actionAlignContentFlexEnd(){
    document.getElementById("blockMain").style.alignContent = "flex-end";
}
function actionAlignItemBetween(){
    document.getElementById("item-Yellow").style.alignSelf = "stretch";
    document.getElementById("item-Red").style.alignSelf = "stretch";
    document.getElementById("item-Blue").style.alignSelf = "flex-end";
    document.getElementById("item-Green").style.alignSelf = "center";
}
function moveBlock(){
    document.getElementById("blockAnimation").style.animation = "toMove 2s infinite linear alternate";
}

function playBlock(){
    document.getElementById("blockAnimation").style.animationPlayState = "running";
}
function pausedBlock(){
    document.getElementById("blockAnimation").style.animationPlayState = "paused";
}


function myAnimation(){
    const element = document.getElementById("animate");
    let id = setInterval(frame, 5);
    let position = 0;
    function frame(){
        if(position == 400){
            clearInterval(id);
            id = setInterval(frame1, 5);
            position = 0;
            function frame1(){
                if(position == 400){
                    clearInterval(id);
                }else{
                    position++;
                    element.style.left = position +"px";
                }
            }
        }else{
            position++;
            element.style.top = position + "px";
        }
    }
}

function mouseOut(element){
    element.style.backgroundColor = "red";
}
function mouseOver(element){
    element.style.backgroundColor = "blue";
}
function mouseUp(element){
    element.style.backgroundColor = "red";
}
function mouseDown(element){
    element.style.backgroundColor = "yellow";
}

document.getElementById("animate").addEventListener("mouseover",function(){toBackGroundColor()})
document.getElementById("animate").addEventListener("mouseout",function(){returnBackGroundColor()})

function toBackGroundColor(){
    document.getElementById("animate").style.backgroundColor = "black";
}
function returnBackGroundColor(){
    document.getElementById("animate").style.backgroundColor = "red";
}

function sum(){
    var numberOne = document.getElementById("numberOne");
    var numberTwo = document.getElementById("numberTwo");
    var result = document.getElementById("result");
    result.value = parseInt(numberOne.value) + parseInt(numberTwo.value);
}

