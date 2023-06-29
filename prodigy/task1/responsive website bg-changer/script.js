document.getElementById("cir-red").addEventListener("click",function(){
    document.getElementById("new").style.backgroundColor="red";
    document.getElementById("new").style.transition="all";
    document.getElementById("new").style.transitionDelay=1000;
    document.getElementById("btn").style.backgroundColor="rgb(179, 16, 62)";
})
document.getElementById("cir-blue").addEventListener("click",function(){
    document.getElementById("new").style.backgroundColor="blue";
    document.getElementById("new").style.transition="all";
    document.getElementById("new").style.transitionDelay="2000";
    document.getElementById("new").style.transitionDuration="5000";
    document.getElementById("btn").style.backgroundColor="rgb(60, 14, 166)";
    
})
document.getElementById("default").addEventListener("click",function(){
    document.getElementById("new").style.backgroundColor="blueviolet";
    document.getElementById("new").style.transition="all";
    document.getElementById("new").style.transitionDelay="2000";
    document.getElementById("btn").style.backgroundColor="rgb(131, 16, 232)";
    
})