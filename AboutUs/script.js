
function play(){
    const pl=document.getElementById("first");
    pl.style.display="none";
    const p2=document.getElementById("second");
    p2.style.display="block";
    const video=document.getElementById("v");
    video.pause;
}

function pause(){
    const p2=document.getElementById("second");
    p2.style.display="none";
    const pl=document.getElementById("first");
    pl.style.display="block";
}

function mobile_menu(){
    const h1=document.getElementById("hidden_bar_id");
    h1.style.display="block";
}

function close_menu(){
    const h1=document.getElementById("hidden_bar_id");
    h1.style.display="none";
}


