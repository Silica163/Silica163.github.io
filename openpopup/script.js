var openp = (link,height,width) =>{
    open(`${link}`,'',`width:${width}px,height:${height}px`);
}
var getvarlue = ()=>{
    var link = document.getElementsByName("link")[0].value;
    var wid = document.getElementsByName("wid")[0].value;
    var hei = document.getElementsByName("hei")[0].value;
    console.log(this);
}
document.addEventListener('keyup',getvarlue);