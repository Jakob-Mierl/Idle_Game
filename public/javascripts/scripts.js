let clicks = 0,
    tId;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

function autoClick() {
    clearInterval(tId);
    setInterval(function(){
        document.getElementById("clicks").innerHTML = clicks += 1;
    }, 1000);
};

function stop(){
    clearInterval(tId);
};