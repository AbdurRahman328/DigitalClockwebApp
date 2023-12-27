function getTime(){
    var time={
        'h':0,
        'm':0,
        's':0
    };

    currentTime = new Date();

    time['h'] = currentTime.getHours();
    time['m'] = currentTime.getMinutes();
    time['s'] = currentTime.getSeconds();
    console.log(time);
    return time;
}

function setTime(){

    time = getTime();
    let hour = document.getElementById("hrs");
    let minute = document.getElementById("mins");
    let second = document.getElementById("secs");
    
    console.log("before");
    if(hour.innerHTML != null && minute.innerHTML != null && second.innerHTML != null){
        console.log("set Time "+time['s']);
        hour.innerHTML = time['h'];
        minute.innerHTML = time['m'];
        second.innerHTML = time['s'];
    }
    console.log("after");

}

function check(){
    console.log("Working");
}