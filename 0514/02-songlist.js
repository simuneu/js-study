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
  for(let i=0; i<songList.length; i++ ){
    const songItem = document.createElement('li');
    songItem.classList="list-group-item"
    songItem.textContent=songList[i];
    current_section.appendChild(songItem)
  }
}//리스트 보여주기
