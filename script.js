let submit=0;

const calc=()=>{

    if(submit==1 || submit!=0){
        audio.pause();
        document.getElementById('text').innerHTML="Reload";

    }
    let audio=new Audio("tune.mp3");
    let rannum=Math.random();
    rannum=100*rannum;
    let realNum=Math.floor(rannum);
    document.getElementById('text').innerHTML="Your ❤️   loves you "+ realNum +" percent";
    var img=document.createElement('img');
    img.src="love18.gif";
    img.width="200";
    img.height="180";
    document.getElementById('cal').appendChild(img);
    audio.play();
    submit+=1;

}

