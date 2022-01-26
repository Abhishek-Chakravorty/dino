let count=0;
let flag=0;
window.addEventListener("keydown",key);
function key(event){
    if(event.key=="ArrowUp")
    {
        dino.setAttribute("class","animate-dino");
        setTimeout(function (){ dino.classList.remove("animate-dino");},1000)
        count++;
        
    }
}
setInterval(function(){
    dino=document.getElementById("dino");
    turtle2=document.querySelector(".turtle");
    tright=parseInt(getComputedStyle(turtle2).right);
    dright=parseInt(getComputedStyle(dino).right);
    tleft=parseInt(getComputedStyle(turtle2).left);
    dleft=parseInt(getComputedStyle(dino).left);
    tbottom=parseInt(getComputedStyle(turtle2).bottom);
    dbottom=parseInt(getComputedStyle(dino).bottom);
    t=(getComputedStyle(turtle2).right);
    if(dright-tright<80 && dbottom-tbottom<50&&tleft-dleft>-40)
    {
        // console.log(turtle2.classList[1])
        score=document.getElementById("score");
        score.innerHTML=`GAME OVER <br> Your Score:- ${count}`;
        score.style.cssText="display:block";
        turtle2.classList.remove("turtle1");
        dino.classList.remove("animate-dino");
        // alert("stop");
        
        document.documentElement.style.setProperty('--tr',t);
        turtle2.style.cssText="right:var(--tr)";
        // console.log(var(--tr));       
    }
},100);
// alert(flag);
// if(flag==1)
// {
//     document.write(count);
// }