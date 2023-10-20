let songIndex = 0;
let audioElement = new Audio('1.mp3');

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'))

let songs = [

    {songName: "Salam-e-Ishq" , filePath: "1.mp3" , coverPath: "1.jpg"},
    {songName: "Apna Bana Le:" , filePath: "2.mp3" , coverPath: "2.jpg"},
    {songName: "Guli Mata: By Saad ," , filePath: "3.mp3" , coverPath: "3.jpg"},
    {songName: "Zihaal e Miskin: ," , filePath: "4.mp3" , coverPath: "4.jpg"},
    {songName: "Naiyo Lagda" , filePath: "5.mp3" , coverPath: "5.jpg"},
    {songName: "Deva Deva" , filePath: "6.mp3" , coverPath: "6.jpg"},
    {songName: "Kesariya" , filePath: "7.mp3" , coverPath: "7.jpg"},
    {songName: "Salam" , filePath: "8.mp3" , coverPath: "8.jpg"},
    {songName: "Ishq" , filePath: "9.mp3" , coverPath: "9.jpg"},
    {songName: "Salam-e-I" , filePath: "10.mp3" , coverPath: "10.jpg"},

]

songItem.forEach((element , i) => {
    element.getElementsByTagName("img")[0] = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click' , () => {

    if(audioElement.paused || audioElement.currentTime <= 0){

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{

        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
});

audioElement.addEventListener('timeupdate' , () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener('change' , () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songItemsname')).forEach((element) => {
    element.addEventListener('click' , (e) => {
        console.log(e);
    })

    
})