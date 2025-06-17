const ul = document.querySelector(".navigation_bar ul")
// 获取视口高度（px）
const viewportHeight = window.innerHeight || document.documentElement.clientHeight
ul.addEventListener('click',function(e){
  e.preventDefault()
  if(e.target.tagName==='LI'){
    document.querySelector('.navigation_bar ul .active').classList.remove('active')
    e.target.classList.add('active')
    const active = document.querySelector('.navigation_bar ul .active')
    const active_nid = +active.dataset.nid
    const top = document.querySelector(`#scroll_${active_nid}`).offsetTop
    const container = document.querySelector('.container')
    container.scrollTo({
        top: top,
        behavior: 'smooth'
    })
  }
})
const container = document.querySelector('.container')
let timer = null
container.addEventListener('scroll',function(){
  clearTimeout(timer)
  timer = setTimeout(()=>{
    const scrollPx = container.scrollTop
    const scrollVh = (scrollPx / viewportHeight * 100).toFixed()
    const active_nid = Math.floor(scrollVh / 100)+1
    document.querySelector('.navigation_bar ul .active').classList.remove('active')
    document.querySelector(`.navigation_bar ul  [data-nid="${active_nid}"]`).classList.add('active')
  },100)
})
const log_in_box = document.querySelector('.navigation_bar .log_in_box')
log_in_box.addEventListener('click',function(e){
  e.preventDefault()
  location.href = './log in.html'
})