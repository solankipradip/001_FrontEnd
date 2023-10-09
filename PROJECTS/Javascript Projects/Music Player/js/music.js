const music = document.querySelector("audio");
const play = document.querySelector("#play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev= document.getElementById("prev");
const next= document.getElementById("next");
const progress_bar= document.getElementById("progress-bar");
const progressed= document.getElementById("progressed");
const loop = document.getElementById("loop");
const current_time = document.getElementById("current-time");
const duration_time = document.getElementById("duration-time");



const songs = [
    {
    name: "song-1",
    title:"Har Kisiko Nahi...",
    artist:"Arijit Singh - Neeti Mohan",
    name2:"img-1",
    },
    {
    name: "song-2",
    title:"Raabta",
    artist:"Arijit - Pritam",
    name2:"img-2",
    },
    {
    name: "song-3",
    title:"Mere Naam Tu",
    artist:"Abhay jodhpukar",
    name2:"img-3",
    },
    {
    name: "song-4",
    title:"Tu Chale",
    artist:"Arijit - Shreya",
    name2:"img-4",
    },


]

let isPlaying = false;
let loopbtn = false;
music.volume= 0.25;



// For play function 

const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
    play.style.title="Pause";
};

// For pause function 

const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", ()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

// Changing the Music data 

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name2 + ".jpg";

}

songsIndex = 0;

// For Next Song 

const nextSong = () =>{
    progressed.style= 0;
    songsIndex = (songsIndex + 1) % songs.length
    loadSong(songs[songsIndex]);
    playMusic();
}

// For Prevoius Song 

const prevSong = () =>{
    songsIndex = (songsIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songsIndex]);
    playMusic();

}


next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);



/////////////////// Music Progress Bar



music.ontimeupdate = (e) =>{

    // duration time set 

    const min_duration = Math.floor(music.duration/60);
    const sec_duration = Math.floor(music.duration % 60);

    duration_time.textContent = min_duration + ":" + sec_duration;

    if(sec_duration<10){
    duration_time.textContent = min_duration + ":" + "0" +sec_duration;
        
    }


    // Current Time set 

    
    const min_current = Math.floor(music.currentTime/60);
    const sec_current = Math.floor(music.duration % 60);

    current_time.textContent = min_current + ":" + sec_current;

    if(sec_current<10){
    current_time.textContent = min_current + ":" + "0" +sec_current;
        
    }
    

 progressed.style.width = Math.floor(music.currentTime * 100 / music.duration )+"%";
}

progress_bar.addEventListener("click", (e)=>{
    music.currentTime = ((e.offsetX/progress_bar.offsetWidth) * music.duration);
})








