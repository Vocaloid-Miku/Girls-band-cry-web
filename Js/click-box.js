const click_box_ul = document.querySelector('.click-box ul')
click_box_ul.addEventListener('click', function (e) {
  e.preventDefault()
  // 防止多次点击
  if (e.target.tagName === 'LI') {
    if (e.target.classList.contains('active')) {
      return;
    }
    //click自身的active加减
    document.querySelector('.click-box ul .active').classList.remove('active')
    e.target.classList.add('active')
    //get click 的id
    const click_active = document.querySelector('#scroll_2 .click-box ul .active')
    const active_cid = +click_active.dataset.cid
    //image2 active的改变
    document.querySelector('.image2_box .image2_active').classList.remove('image2_active')
    document.querySelector(`.image2_box [data-i2id="${active_cid}"]`).classList.add('image2_active')
    document.querySelector('.image3_active').classList.remove('image3_active')
    document.querySelector(`[data-i3id="${active_cid}"]`).classList.add('image3_active')
    document.querySelector('.image4_active').classList.remove('image4_active')
    document.querySelector(`[data-i4id="${active_cid}"]`).classList.add('image4_active')
    //主题颜色数组
    const cover_arr = ["d01534","28a1fe","53bd25","fc48ab","ffe75f"]
    //cv 数组
    const cv_arr = ["理名","夕莉","美怜","凪都","朱李"]
    //主题人物名字数组
    const name_arr = ["井芹仁菜","河原木桃香","安和昴","海老冢智","鲁帕"]
    const englishname_arr = ["NINA","MOMOKA","SUBARU","TOMO","RUPA"]
    //大数组
    const big_arr = [
      {
        posi: "Vo.",
        long: "乐队主唱,性格坚韧且情感浓烈,曾因家庭对“淑女”的规训陷入自我怀疑,却在摇滚中找到宣泄出口。歌声如利刃剖开内心,舞台上能爆发出撕裂灵魂的张力,私下却对音乐怀揣纯粹的敬畏,将每句歌词都视作与世界对话的呐喊。",
        sort: "Nina / CV LiMing"
      },
      {
        posi: "Gt.",
        long: "吉他手,前偶像组合“钻石星尘”成员,因厌倦公式化表演出走街头。吉他风格狂野不羁,擅长用即兴扫弦点燃现场,骨子里透着对“规矩”的叛逆。表面看似随性洒脱,实则对音乐有着近乎偏执的真诚,认为“弹错的音符才是心跳的节奏”。",
        sort: "Momoka / CV XiLi"
      },
      {
        posi: "Dr.",
        long: "鼓手,出身演艺世家,却拒绝成为“完美人偶”。鼓点如暴风般炸裂,以即兴节奏打破常规,将对家族期望的反叛融入每一次敲击。性格外冷内热,舞台上是掌控情绪的“节奏暴君”,私下却因害怕辜负音乐而暗自较真,用鼓棒在沉默中敲出自我宣言。",
        sort: "Subaru / CV MeiLian"
      },
      {
        posi: "Ky.",
        long: "键盘手,曾独自运营乐队“beni-shouga”,技术精湛且逻辑缜密,是乐队编曲的“理性大脑”。性格冷静内敛,习惯用音阶构建情感迷宫,表面“生人勿近”,实则对音乐伙伴毫无保留。指尖在琴键上编织秩序,却在和弦中偷偷藏进不为人知的疯狂。",
        sort: "Tomo / CV ZhiDo"
      },
      {
        posi: "Ba.",
        long: "贝斯手,低音如大地般沉稳,以丰富舞台经验支撑乐队。曾在地下音乐圈摸爬滚打,性格温柔包容,是团队的“定海神针”。看似寡言,却能通过贝斯震频感知成员情绪,用低音线托住所有人的失控,坚信“温柔的人才能接住摇滚的重量”。",
        sort: "Rupa / CV ZhuLi"
      }
    ]
    //account数组
    const account_arr = ["不登校","脱退","嘘つき","いらしい","酒豪"]
    //sort
    const sort = document.querySelector('.landscape_orientation .cvbox .sort')
    sort.innerHTML = `${big_arr[active_cid-1].sort}`
    //long
    const long = document.querySelector('.landscape_orientation .cvbox .long')
    long.innerHTML = `${big_arr[active_cid-1].long}`
    
    //posi
    const posi = document.querySelector('.landscape_orientation .cvbox .posi')
    posi.innerHTML = `${big_arr[active_cid-1].posi}`
    posi.style.color = `#${cover_arr[active_cid - 1]}`
    const cv_name = document.querySelector('.landscape_orientation .cvbox .cvname')
    //cv name
    cv_name.innerHTML = `${cv_arr[active_cid-1]}`
    const name_box = document.querySelector('.landscape_orientation .name_box')
    //name box
    name_box.innerHTML = `${name_arr[active_cid-1]}`
    const h6List = document.querySelectorAll('.landscape_orientation .moving_text h6')
    h6List.forEach(h6 => {
      h6.innerHTML = englishname_arr[active_cid - 1]
      h6.style.color = `#${cover_arr[active_cid - 1]}`
    })
    //cvlogo 变化
    const cvlogo = document.querySelector('.landscape_orientation .cvbox .cvlogo')
    cvlogo.style.background = `#${cover_arr[active_cid - 1]}`
    // account 变化
    const account = document.querySelector('.landscape_orientation .account')
    account.style.setProperty('--highlight-color',`#${cover_arr[active_cid - 1]}`)
    account.innerHTML = `${account_arr[active_cid-1]}`
    //name_box 背景变化
    name_box.style.background = `#${cover_arr[active_cid - 1]}`
    //cover background 颜色改变
    const cover = document.querySelector('.landscape_orientation .cover')
    cover.style.background = `#${cover_arr[active_cid - 1]}`
    //开始动画运行
    cover.style.animation = 'coverIn 0.5s'
    //结束动画运行
    cover.addEventListener('animationend', function () {
      //切换图片
      const img_active = document.querySelector('#scroll_2 .landscape_orientation .image_active')
      img_active.classList.remove('image_active')
      document.querySelector(`.landscape_orientation [data-iid="${active_cid}"]`).classList.add('image_active')
      cover.style.animation = 'coverOut 0.5s';
    })
  }
})