// info related to all music

const allKeys = [{
   name:"Shinchan1",
   src:"music1",
   url:"image1"
},
{
   name:"Shinchan2",
   src:"music2",
   url:"image2"
},
{
   name:"Shinchan3",
   src:"music3",
   url:"image3"
}
]
const musicImage = document.querySelector(".image");
const musicText = document.querySelector(".name h3");
const playPause = document.querySelector(".play");
const song = document.querySelector("audio");
const icons = document.querySelector(".play");
const end = document.querySelector('.end');

 let musicIndex = 0;

// loadMusic when window is loaded

window.addEventListener('load',()=>{
   loadMusic(musicIndex);
});

 function loadMusic(num){
musicImage.style.backgroundImage=`url("images/${allKeys[num].url}.jpg")`;
musicText.innerText = allKeys[num].name;
song.src=`tunes/${allKeys[num].src}.mp3`;
};

//PLaying music by checking if play contains pause class or not 

playPause.addEventListener('click',()=>{
   let pause = playPause.classList.contains('pause');
   pause ? pauseMusic():playMusic();
});


// Pause music when clicked

 function pauseMusic(){
   playPause.innerHTML= '<i class="fa-solid fa-play"></i>' ;
song.pause();
playPause.classList.remove('pause');
 }

//  Play music when clicked

 function playMusic(){
   icons.innerHTML= '<i class="fa-solid fa-stop"></i>' ;
   song.play();
   playPause.classList.add('pause');
 };

 //  Moving ahead in song

 const forePlay = document.querySelector('.forward');

 forePlay.addEventListener('click',()=>{
loopShuffle();
 musicForward()  ; 
 });
 function musicForward(){
   musicIndex++;
   musicIndex>allKeys.length-1?musicIndex=0:musicIndex=musicIndex;
   loadMusic(musicIndex);
   playMusic();
 }

  //  Moving back in song

const backPlay = document.querySelector('.backward');
backPlay.addEventListener('click',()=>{
   loopShuffle();
   musicIndex+=2
  musicBackward();
});
function musicBackward(){
   musicIndex--;
   musicIndex<0?musicIndex=2:musicIndex=musicIndex;
   loadMusic(musicIndex);
   playMusic();
}

// looping and shuffling with songs

function loopShuffle(){
   if(a){
      let anyNum = Math.floor(Math.random()*3);
      musicIndex = anyNum;
   console.log(anyNum)
     }
     else if(!b){
      musicIndex = musicIndex-1
     }
}

// moving of progress bar 

const progressBar = document.querySelector('.backward');
const inside = document.querySelector('.inside');
const circle = document.querySelector('.circle');
const time = document.querySelector('.start');

song.addEventListener('timeupdate',(e)=>{

  let playTime =  Math.round(e.target.currentTime);
  let duration  =  Math.floor(e.target.duration%60);
  if(playTime===duration){
loopShuffle();
   musicForward();
  }
   inside.style.width=(playTime/duration)*100+"%";
   circle.style.left=(playTime/duration*100)-1+"%";
   playTime<10?
  time.innerText = `0:0${playTime}`:
  time.innerText=`0:${playTime}`;

})

// audio duration 

song.addEventListener('loadeddata',(e)=>{
let duration  =  Math.floor(e.target.duration%60);
duration=0?end.innerText = '0:00':
end.innerText = `0:${duration}`;

});

// Shuffle playing Music 

const shuffle = document.querySelector('.fa-shuffle');
a = false;

shuffle.addEventListener('click',()=>{
   shuffle.classList.toggle('red');
   a = shuffle.classList.contains('red');
   console.log(a);
   b = true
b?loop.style.color="black":loop.style.color="red";
loop.classList.add('contain')
});

// loop play music

b= true;
const loop = document.querySelector('.loop');
 loop.addEventListener('click',()=>{
   shuffle.classList.remove('red');
   a =false;
   loop.classList.toggle('contain');
   b = loop.classList.contains('contain');
   b?loop.style.color="black":loop.style.color="red";
   console.log(b)
 });

//  Music list appear when clicked in list icon and playing desireed music

 const musicList =document.querySelectorAll('.music-list ul li')
 musicList.forEach((item)=>{
   item.addEventListener('click',()=>{
      any = item.getAttribute('id')
      console.log(any);
      musicIndex=any;
     loadMusic(musicIndex);
     playMusic();
   })
 }
);

// adding color on loop and shuffle when clicked and applying code so that it occur one at a time either loop or shuffle


const container = document.querySelector('.music-list');
const all = document.querySelector('.bg');
const list = document.querySelector('.fa-list-ul');
list.addEventListener('click',()=>{
   container.classList.add('visible');
   all.style.display="block"

})
 const cancel = document.querySelector('.fa-xmark');
 cancel.addEventListener('click',()=>{
   container.classList.remove('visible');
     all.style.display="none"
 });
 const musicInfo = document.querySelector('.fa-caret-down');
 const downIcon = document.querySelector('.fa-caret-up');
 const about = document.querySelector(".about")
 musicInfo.addEventListener('click',()=>{
   about.style.visibility = "visible";
     all.style.display="block"
  musicInfo.style.display="none"
   downIcon.style.display = "block"
 });
 downIcon.addEventListener('click',()=>{
   about.style.visibility = "hidden";
     all.style.display="none"
     musicInfo.style.display="block"
   downIcon.style.display = "none"
 });