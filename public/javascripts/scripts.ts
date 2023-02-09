let clicks : number = 0;

function onClick(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = String(clicks);
};