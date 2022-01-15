var openp = (link,height,width) =>{
    open(`${link}`,'',`width:${width}px,height:${height}px`);
}
var getvarlue = ()=>{
    var link = document.getElementsByName("link")[0];
    var wid = document.getElementsByName("wid")[0];
    var hei = document.getElementsByName("hei")[0];
    console.log(this);
}
document.addEventListener('keydown',(ev)=>{
    if(ev.key=='Enter'){getvarlue();}
});