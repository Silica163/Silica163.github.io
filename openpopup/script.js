var openp = (link,width,height) =>{
    open(`${link}`,'',`width=${width}px,height=${height}px`);
}
var getvarlue = ()=>{
    var link = document.getElementsByName("link")[0];
    var wid = document.getElementsByName("wid")[0];
    var hei = document.getElementsByName("hei")[0];
    console.dir(link);
    console.dir(wid);
    console.dir(hei);
    openp(link.value,wid.value,hei.value);
}
document.addEventListener('keydown',(e)=> {e.key == "Enter" ?? getvarlue});
