function iledo(){
let ilebrakujeh
let ilebrakujemin, ilebrakujemin2, ilebrakujes, ilebrakujes2;
let data = new Date()
let godzina = data.getHours();
let minuta = data.getMinutes();
let sekunda = data.getSeconds();

    if(godzina<=21&&minuta<=15){ilebrakujeh = (21-godzina); ilebrakujemin = (15-minuta)}
    if(godzina<21&&minuta>15){ilebrakujeh = (20-godzina); ilebrakujemin = ((60-minuta)+15)}
    if(godzina>21&&minuta<=15){ilebrakujeh = ((24-godzina)+21); ilebrakujemin = (15-minuta)}
    if(godzina>=21&&minuta>15){ilebrakujeh = ((24-godzina)+20); ilebrakujemin = ((60-minuta)+15)}
    ilebrakujes=60-sekunda;
    if(ilebrakujemin<10){ilebrakujemin2="0"+ilebrakujemin-1}else{ilebrakujemin2=ilebrakujemin-1}
    if(ilebrakujes<10){ilebrakujes2="0"+ilebrakujes}else{ilebrakujes2=ilebrakujes}
    $("#godzina").html("<span id='godzina'>"+ilebrakujeh+"</span>")
    $("#minuta").html("<span id='minuta'>"+ilebrakujemin2+"</span>")
    $("#sekunda").html("<span id='sekunda'>"+ilebrakujes2+"</span>")
}
$("#godzina").ready(iledo)
setInterval(() => {
    iledo();
}, 1000 );