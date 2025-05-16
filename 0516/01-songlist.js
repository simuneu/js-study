const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  "Drowning": { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  "Whiplash": { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  "HOT": { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};

const current_section= document.getElementById('current_section')
const current_song= document.getElementById('current_song')

current_song.addEventListener('click', ()=>{
  if(current_section.style.display === 'none'||current_section.style.display === ''){
    currentList();
    current_section.style.display='block';
  }else{
    current_section.style.display='none';
  }
})//토글 기능

currentList=()=>{
  current_section.innerHTML=''
  // for(let i=0; i<songList.length; i++ ){
  //   const songItem = document.createElement('li');
  //   songItem.classList="list-group-item"
  //   songItem.textContent=songList[i];
  //   current_section.appendChild(songItem)
  // }

  // let i =0;
  // while (i < songList.length) {
  //     const songItem = document.createElement('li');
  //     songItem.classList = "list-group-item";
  //     songItem.textContent = songList[i];
  //     current_section.appendChild(songItem);
  //     i++;
  //   }

  // songList.forEach((el)=>{
  //   const songItem = document.createElement('li');
  //   songItem.classList = "list-group-item";
  //   songItem.textContent = el;
  //   current_section.appendChild(songItem);
  // })

  let j=0;
  for(let num of songList){
    const songItem = document.createElement('li');
    songItem.classList = "list-group-item";
    songItem.textContent = `${j+1} ${num}`;
    current_section.appendChild(songItem);
    j++
  }
}//리스트 보여주기

const info_song_list= document.getElementById('info_song_list')
const info_section= document.getElementById('info_section')
infoList=()=>{
  info_section.innerHTML='';
  for(let song in songDetails){
   const {artist, likes}=songDetails[song];

   const songItem= document.createElement('li');
   songItem.classList= "list-group-item";
   songItem.innerHTML=`
    <strong>${song}</strong><br>
    아티스트: ${artist}<br>
    좋아요: ${likes}
   `
   info_section.appendChild(songItem);
  }
}

const info_best_list= document.getElementById('info_best_list')
const best_section= document.getElementById('best_section')

infoBest=()=>{
  best_section.innerHTML='';
  for(let song in songDetails){
    const {artist, likes} = songDetails[song];

    if(likes>=60000){
      const songItem= document.createElement('li');
      songItem.classList= "list-group-item";
      songItem.innerHTML=`
        <strong>${song}</strong><br>
        아티스트: ${artist}<br>
        좋아요: ${likes}
      `
      best_section.appendChild(songItem);
    }
  }
}

add_song=()=>{
  const songTitle = document.getElementById('song-title').value.trim("");
  const singer = document.getElementById('singer').value.trim("");
  const songLikes = Number(document.getElementById('song-likes').value);
  
  if(!songTitle||!singer||isNaN(songLikes)){
    alert("모든 값을 입력하세요.")
    return;
  }
  songDetails[songTitle]={
    artist:singer, likes:songLikes
  }
  alert(`${songTitle}이(가) 추가되었습니다.`);
  
  bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();

  document.getElementById('song-title').value='';
  document.getElementById('singer').value='';
  document.getElementById('song-likes').value='';

  drawList();
}

drawList=()=>{
  info_section.innerHTML='';
  for(let song in songDetails){
    const {artist, likes}=songDetails[song];

    const songItem= document.createElement('li');
    songItem.classList= "list-group-item";
    songItem.innerHTML=`
      <strong>${song}</strong><br>
      아티스트: ${artist}<br>
      좋아요: ${likes}
    `
    info_section.appendChild(songItem);
  }
}