// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const take_off = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const up_btn = document.getElementById("up");
    const down_btn = document.getElementById("down");
    const right_btn = document.getElementById("right");
    const left_btn = document.getElementById("left");
    imgObj = document.getElementById("rocket");
    let offsetLeft = 0;
    let offsetDown = 0;
    let status = document.getElementById("flightStatus");
    let height = document.getElementById("spaceShuttleHeight");
    let bColor = document.getElementById("shuttleBackground");

    take_off.addEventListener("click",function(){
        let ready = confirm("Confirm that the shuttle is ready for takeoff.")
        if (ready){
            status.innerHTML = "Shuttle in flight.";
            bColor.style.backgroundColor = "blue";
            height.innerHTML = 10000;
        }
    })

    land.addEventListener("click",function(){
        alert ("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        height.innerHTML = 0;
        bColor.style.backgroundColor = "green";
    })

    abort.addEventListener("click",function(){
        let alert = confirm ("Confirm that you want to abort the mission.");
        if(alert){
            status.innerHTML = "Mission aborted.";
            height.innerHTML = 0;
            bColor.style.backgroundColor = "green";
        }  
    })

    up_btn.addEventListener("click",moveUp);
    down_btn.addEventListener("click",moveDown);
    right_btn.addEventListener("click",moveRight);
    left_btn.addEventListener("click",moveLeft);

    function moveUp(){
        offsetDown -= 10;
        imgObj.style.top = (offsetDown)+"px";
        height.innerHTML = parseInt(height.innerHTML) + 10000;
    }

    function moveDown(){
        offsetDown += 10;
        imgObj.style.top = (offsetDown)+"px";
        height.innerHTML = parseInt(height.innerHTML) - 10000;
    }
    function moveRight(){
        offsetLeft += 10;
        imgObj.style.position = "relative";
        imgObj.style.left = (offsetLeft)+"px";
    }
    function moveLeft(){
        offsetLeft -= 10;
        imgObj.style.left = (offsetLeft)+"px";
    }            
}


window.addEventListener("load", init);