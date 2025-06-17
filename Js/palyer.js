const player_select_ul = document.querySelector('.player-select ul')
const singarr = ["雑踏、僕らの街","空の箱 (井芹仁菜、河原木桃香)","誰にもなれない私だから","声なき魚 (新川崎(仮))","空白とカタルシス","運命の華","名もなき何もかも","偽りの理","サヨナラサヨナラサヨナラ","運命に賭けたい論理","理想的パラドクスとは","気鬱、白濁す","傷つき傷つけ痛くて辛い","極私的極彩色アンサー","心象的フラクタル","視界の隅 朽ちる音 (新川崎（仮）)","爆ぜて咲く","黎明を穿つ","蝶に結いた赤い糸","闇に溶けてく","臆病な白夜","飛べない蝶は夢を見る","ダレモ"]
let singarr_number = 0
const audio = document.querySelector('.player-play audio')
player_select_ul.addEventListener('click',function(e){
  let targetLi = e.target.closest('li')
  if (targetLi) {
    if (targetLi.classList.contains('active')) {
      return
    }
    document.querySelector('.player-select ul li.active').classList.remove('active')
    targetLi.classList.add('active')
    const targetLi_liid = +targetLi.dataset.liid
    const select_img = targetLi.querySelector('img')
    if (select_img) {
      // 获取 img 元素的 src 属性
      const imgSrc = select_img.src;
      const play_img = document.querySelector('.player-play .recordpic')
      play_img.src = imgSrc
      const play_name = document.querySelector('.player-play .play-name')
      play_name.innerHTML = `${singarr[targetLi_liid-1]}`
      audio.src = `./music/${singarr[targetLi_liid-1]}.mp3`
      singarr_number = targetLi_liid-1
      playSong()
    }
  }
})

// 喜欢单独模块
const like =document.querySelector('.play-btn .like')
like.addEventListener('click',function(){
  like.querySelector('span').classList.toggle('icon-xihuan')
  like.querySelector('span').classList.toggle('icon-xihuan1')
})
// 循环播放单独模块
let circulation_check = 0
const circulation = document.querySelector('.circulation')
circulation.addEventListener('click',function(){
  circulation.querySelector('span').classList.toggle('icon-shunxubofang')
  circulation.querySelector('span').classList.toggle('icon-danqubofang')
  circulation_check = ++circulation_check % 2
  console.log(circulation_check)
})
audio.onended = function(){
  if(circulation_check){
    audio.play()
  }
  else{
    nextSong()
  }
}
//播放单独模块
const play = document.querySelector('.play-btn2 .play')
play.addEventListener('click',function(){
  if(audio.paused){
    playSong()
  }
  else{
    pauseSong()
  }
})
// 播放歌曲
function playSong() {
    play.querySelector('span').classList.remove('icon-icon_play')
    play.querySelector('span').classList.add('icon-zanting')
    audio.play()
}
// 停止播放
function pauseSong() {
    play.querySelector('span').classList.remove('.icon-zanting')
    play.querySelector('span').classList.add('icon-icon_play')
    audio.pause();
}
const progressContainer = document.querySelector('.player-play .progress-container')
const progress = document.querySelector('.player-play .progress-container .progress')
//上一首
function prevSong(){
  audio.pause()
  singarr_number--
  if(singarr_number < 0){
    singarr_number = singarr.length - 1
  }
  audio.src = `./music/${singarr[singarr_number]}.mp3`
  document.querySelector('.player-select ul li.active').classList.remove('active')
  document.querySelector(`.player-select ul li:nth-child(${singarr_number + 1})`).classList.add('active')
  const play_img = document.querySelector('.player-play .recordpic')
  play_img.src = `./image/${singarr[singarr_number]}.jpg`
  const play_name = document.querySelector('.player-play .play-name')
  play_name.innerHTML = `${singarr[singarr_number]}}`
  playSong()
}
const prev = document.querySelector('.play-btn2 .prev')
prev.addEventListener('click',function(){
  prevSong()
})
//下一首
function nextSong(){
  audio.pause()
  singarr_number++
  if(singarr_number > (singarr.length -1)){
    singarr_number = 0
  }
  audio.src = `./music/${singarr[singarr_number]}.mp3`
  document.querySelector('.player-select ul li.active').classList.remove('active')
  document.querySelector(`.player-select ul li:nth-child(${singarr_number + 1})`).classList.add('active')
  const play_img = document.querySelector('.player-play .recordpic')
  play_img.src = `./image/${singarr[singarr_number]}.jpg`
  const play_name = document.querySelector('.player-play .play-name')
  play_name.innerHTML = `${singarr[singarr_number]}}`
  playSong()
}
const next = document.querySelector('.play-btn2 .next')
next.addEventListener('click',function(){
  nextSong()
})
function updateProgress(e) {
    // audio.duration: 音频长度
    // audio.currentTime: 音频播放位置
    // 对象解构操作
    const {
        duration,
        currentTime
    } = e.target;
    // e.target = {
    //     duration: 225,  // 当前音频时间长度 
    //     currentTime:0  // 当前播放时间
    // }
    const progressPercent = (currentTime / duration) * 100
    // 进度条
    progress.style.width = `${progressPercent}%`
}
// 设置进度条
function setProgress(e) {
    // progressContainer代理视图宽度
    const width = this.clientWidth
    // 鼠标点击时处于progressContainer里的水平偏移量
    const clickX = e.offsetX

    // audio.duration: 音频长度
    const duration = audio.duration

    // audio.currentTime: 音频播放位置
    audio.currentTime = (clickX / width) * duration
}
// 3.1 设置播放进度
progressContainer.onclick = setProgress
// 3.2 进度条更新
audio.ontimeupdate = updateProgress