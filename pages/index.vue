<template>
  <div id="recruit">
    <Navbar />
    <section id="title">
      <div class="bg">
        <div class="bg-img" />
        <div class="bg-mask" />
      </div>
      <div class="wrapper container">
        <div class="Header">
          <h1>青年學生<br>體檢政府網站<span class="color:ray">數位服務</span>專案</h1>
          <span>RAY 5.0 - Rescue Action by Youth .gov 2021</span>
        </div>
        <div class="video">
          <YouTube video="https://www.youtube.com/embed/rFL5dRfGEs4" />
        </div>
        <div class="Footer">
          歡迎具<span class="color:ray weight:bold">設計專長</span>和<span class="color:ray weight:bold">資訊專長</span>的你加入我們光的行列
        </div>
      </div>
    </section>
    <section id="intro">
      <h2>專案介紹</h2>
      <ul>
        <li>
          <h3>RAY 是什麼？</h3>
          <p>行政院國家發展委員會一直戮力推動政府網站數位服務改善，PDIS 透過教育部青年發展署的大專生公部門實習計畫，開辦青年學生體檢政府網站數位服務專案（RAY - Rescue Action by Youth .gov），邀請青年和國發會及相關部會協作，一同改善政府網站數位服務體驗。本見習計畫自 2017 年起至今已經舉辦 4 屆，今年將招募第 5 屆。</p>
        </li>
        <li>
          <h3>要做些什麼？</h3>
          <p>RAY 將和行政院國家發展委員會的「政府網站導入使用者中心設計（User Centeral Design）輔導工作坊（UCD工作坊）」合作，參與改善今年度輔導之機關網站的數位服務體驗。透過網站使用者研究，再經由訪談、分析、討論、激盪發想等過程，最終產出網站改善建議，提供部會參考。</p>
        </li>
        <li>
          <h3>我們怎麼做？</h3>
        <p>RAY 5.0 將透過教育部青年發展署「大專生公部門見習計畫」招募 20 名具有使用者經驗、服務設計和網頁系統開發相關背景的大專院校在學學生，與機關同仁一起改造政府網站的數位服務體驗。除了原則上兩週一次的實體見面協作外，本見習大多數時間由小組自行安排，同學可透過線上討論或組內自行約定實體見面工作，PDIS也會架設 IM 平台讓大家線上即時討論協作。</p>
        </li>
        <li>
          <h3>結束以後？</h3>
          <p>每一屆 RAY 的見習成果都會提供網站主管機關，作為未來進行網站改版的參考依據，並全數上網公開，供社會大眾參考</p>
        </li>
      </ul>
      <span class="achivement-btn">看看 RAY 4 <a href="/2020">專案成果</a></span>
    </section>
    <section id="schedule">
      <h2>專案期程</h2>
      <div class="wrapper">
        <Timeline :list="schedules" />
      </div>
    </section>
    <section id="faq">
      <h2>FAQ</h2>
      <div class="wrapper">
        <h3>我不是大學生，也可以報名嗎？</h3>
        <p>這次的見習機會來自教育部青年發展署的「大專生公部門見習計畫」，所以僅限於大專院校的大學生和研究生參與（8月底、9月初的成果發表會當日，仍需具備在校生身份）。我們歡迎任何人持續提供對於政府網站的所有意見。</p>
        <h3>我還有別的打工，可以參加這次見習嗎？</h3>
        <p>本見習需要細緻的跨領域溝通和高度小組協作，且時程相當緊湊，其中包含使用者訪談、組內會議、個人實作和定期到台北進行實體見面會，見習時數共計200小時，建議有興趣的同學「審慎」評估自身暑期時間安排。
        <h3>我要具備什麼條件才能報名呢？</h3>
        <p>希望是具有使用者研究（User reserach )、服務設計（Service Design）、網頁系統開發（Web Development）、使用者介面（UI/User Interface）、使用者體驗（UX/User Experience）以上任一專長或相關科系之學生，惟具網頁系統開發（Web Development）專長之同學須對於使用者介面或體驗設計（UI/UX）敏感度佳且有興趣。</p>
        <p>報名時請附上作品集或任何可以線上展示專案的連結，包括（但不限於）Behance、Figma、Skecth Resource、Dribbble、GitHub/GitLab Repository、個人網站</p>
        <h3>為什麼會找見習生來體檢政府網站數位服務？</h3>
        <p>政府網站本應提供一致且友善的使用體驗，透過教育部青年署的「大專生公部門見習計畫」，我們希望邀請青年朋友一同協作，讓政府數位服務更為完善，並藉此強化政府與青年朋友的互動。</p>
        <h3>我要到行政院上班嗎？</h3>
        <p>不用，這個見習計畫主要以線上協作進行，原則上每兩周舉辦一次小型實體聚會，見習結束後舉行成果發表會。</p>
        <h3>我要怎麼和 PDIS 的人工作？</h3>
        <p>無論何時何地，你都可以透過線上平台討論、共筆處理報告文件。我們會架設專屬的 IM 軟體提供線上提問、討論，所有互動紀錄都能留存回溯。</p>     
        <h3>遠距見習要怎麼計算工時？</h3>
        <p>我們會請各組在不同階段記錄成果，並以此為依據計算工時，詳細內容會在報到時說明。</p>
        <h3>我可以從這次見習中學到什麼？</h3>
        <p>透過體檢政府網站數位服務，你可以深入瞭解政府機關的業務內容、廣泛了解數位服務。從無到有的過程中除了可以擔任團隊不同的角色，也可以從中獲得豐富的 UI/UX 設計和原型開發的經驗。</p>
        <h3>以後還有類似的見習機會嗎？</h3>
        <p>這是第五屆的 RAY 計畫，我們希望未來能持續和更多青年朋友一起協作。</p>
        <h3>唐鳳本人會參與嗎？</h3>
        <p id="isAuJoin">
          可能以各種形式不時出沒（無誤）
        </p>
      </div>
    </section>
    <section id="comment" class="container">
      <h2>見習心得</h2>
      <div class="title">
        <h3>「見習完了，學長姐們都在想什麼？」</h3>
      </div>
      <video
        class="image"
        src="~/static/intern_libx264_profile-main_level-3.1_preset-medium_crf-28_570x360.mp4"
        autoplay
        playsinline
        muted
        loop
      />
      <div class="intro">
        <p>來自不同大專院校的同學們各懷專長，在兩個月的協作中磨合推進，透過「遠距工作」、「設計與資訊背景協作」、「部會人員共同參與」等作法加乘，淬煉出不同的工作模式和心法。歡迎了解同學們的見習心得，更深入地瞭解他們如何做好準備，並投入此次專案。</p>
      </div>
      <div class="filter">
        <p>您可以透過下方的標籤，篩選欲瀏覽的相關文章：</p>
        <template v-for="(tag, i) in commentTags">
          <label :key="i">
            <input
              v-model="selectedCommentTags"
              type="checkbox"
              :value="tag"
            >
            <span>{{ tag }}</span>
          </label>
        </template>
      </div>
      <div class="comments">
        <template v-for="(comment, index) in filteredComments">
          <Comment
            :key="index"
            :avatar="comment.avatar"
            :name="comment.name"
            :quote="comment.quote"
            :title="comment.title"
            :url="comment.url"
            :content="comment.content"
          />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import YouTube from '~/components/YouTube.vue'
export default {
  components: { YouTube },
  data () {
    return {
      comments: require('~/static/comment_meta.json'),
      selectedCommentTags: [],
      schedules: [
        {
          time: '2021-04-12',
          label: '開放報名',
          text: '青年署 - 「大專學生公部門見習計畫」'
        },
        {
          time: '2021-04-30',
          label: '報名截止',
          text: '青年署 - 「大專學生公部門見習計畫」'
        },
        {
          time: '2021-05-10 前',
          label: '寄送面試通知',
          text: 'PDIS 公共數位創新空間小組'
        },
        {
          time: '2021-05-12~26',
          label: '來面試聊聊天',
          text: 'PDIS 公共數位創新空間小組'
        },
        {
          time: '2021-06-05',
          label: '錄取名單公佈',
          text: '青年署 - 「大專學生公部門見習計畫」'
        },
        {
          time: '2021-07-01',
          label: '報到／講習工作坊',
          text: 'PDIS 公共數位創新空間小組'
        },
        {
          time: '2021-08-31',
          label: 'PDIS 內部成果發表會',
          text: 'PDIS 公共數位創新空間小組'
        },
      ]
    }
  },
  computed: {
    commentTags () {
      return this.comments.reduce((pv, v, i) => {
        v.tags.forEach((tag) => {
          if (!pv.includes(tag)) {
            pv.push(tag)
          }
        })
        return pv
      }, [])
    },
    filteredComments () {
      if (this.selectedCommentTags.length > 0) {
        return this.comments.filter(comment =>
          this.selectedCommentTags.reduce((isSelected, tag) => {
            return comment.tags.includes(tag) || isSelected
          }, false))
      } else {
        return this.comments
      }
    }
  },
  mounted () {
    this.shuffleData()
  },
  methods: {
    shuffleData () {
      this.comments = this.comments.sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<style>
a {
  color: var(--color-ray);
}

a:hover {
  color: var(--color-ray-alpha);
}

#title {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}

#title > .wrapper, #title > .bg {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

#title > .wrapper {
  color: white;
  margin-top: 4.625rem;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas: "header" "video" "footer";
  gap: 1rem;
  justify-items: center;
  align-self: center;
  align-content: center;
}

#title > .wrapper > .Header {
  grid-area: header;
}

#title > .wrapper > .vidoe {
  grid-area: video;
}

#title > .wrapper > .Footer {
  grid-area: footer;
}

.bg {
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}

.bg > .bg-img {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-image: url('~assets/title-bg.jpg');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.bg > .bg-mask {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background: rgba(17, 16, 16, 0.85);
  width: 100%;
  height: 100%;
}

#recruit > section:not(:nth-child(2)) {
  padding-top: 3em;
  padding-bottom: 3em;
  scroll-margin-top: 4.625rem;
}

#recruit > section > h2:after {
  display: block;
  width: 1.5em;
  height: .125rem;
  content: ' ';
  margin: .5em auto 1em auto;
}

#recruit > section:nth-child(2n+1) {
  background-color: var(--color-ray);
  color: white;
}

#recruit > section:nth-child(2n+1) > h2:after {
  background-color: white;
}

#recruit > section:nth-child(2n) > h2:after {
  background-color: var(--color-ray);
}

#recruit > section > h2 {
  font-size: 2rem;
  text-align: center;
}

/** ---------------------Intro--------------------- */

#intro > ul {
  list-style: none;
  padding-left: 0;
  display: grid;
  margin: auto 4em;
  gap: 3em;
  grid-template-columns: repeat(4, 1fr);
}

#intro > ul > li > h3 {
  text-align: center;
}

#intro > .achivement-btn {
  background-color: white;
  color: black;
  padding: .25rem 1rem;
  border-radius: 20px;
  border-style: solid;
  border-color: white;
  margin: 1em auto 2em auto;
  width: max-content;
  display: block;
}

@media screen and (max-width: 991px) {
  #intro > ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 575px) {
  #intro > ul {
    grid-template-columns: 1fr;
  }
}

/** -------------------SCHEDULE------------------- */
#schedule > .wrapper {
  max-width: 80vw;
  margin: 0 auto;
}

/** ---------------------FAQ--------------------- */
#faq > .wrapper {
  max-width: min(768px, 80vw);
  margin: 2.5em auto;
}

#faq h3 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 2em;
  opacity: .7;
}

#faq p {
  font-weight: 700;
}

#isAuJoin {
  font-size: 3rem;
}

@media screen and (max-width: 767px) {
  #isAuJoin {
    text-align: center;
  }
}

/** -------------------Comment------------------- */
#comment {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'header header' 'title image' 'intro image' 'filter filter' 'comments comments';
  justify-content: center;
  justify-items: center;
  padding-left: min(7.5em, 8.33vw);
  padding-right: min(7.5em, 8.33vw);
}

#comment > h2 {
  grid-area: header;
}

#comment .title {
  grid-area: title;
  justify-self: start;
}

#comment .intro {
  grid-area: intro;
}

#comment .image {
  grid-area: image;
  max-width: 640px;
  width: calc(100% - 2em);
  justify-self: end;
  align-self: center;
}

#comment > .filter {
  grid-area: filter;
  margin-top: 2.5em;
  margin-bottom: 4.5em;
  justify-self: start;
}

#comment > .filter > label {
  margin: .5em;
}

#comment > .filter > label > input {
  display: none;
}

#comment > .filter > label > span {
  background-color: #C4C4C4;
  line-height: 1.5;
  padding: .5em 1.5em;
}

#comment > .filter > label > input:checked + span {
  background-color: var(--color-ray);
  color: white;
}

@media screen and (max-width: 992px) {
  #comment {
    grid-template-columns: auto;
    grid-template-areas: 'header' 'title' 'image' 'intro' 'filter' 'comments';
    padding: 0 3em;
  }

  #comment .title {
    justify-self: center;
    margin-bottom: .5rem;
  }

  #comment .image {
    width: calc(100vw - 6em);
    margin-bottom: 1.5rem;
    justify-self: center;
  }
}

#comment .comments {
  grid-area: comments;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2em;
  grid-row-gap: 2em;
}

@media screen and (max-width: 1200px) {
  #comment .comments {
    grid-template-columns: auto;
  }
}
</style>
