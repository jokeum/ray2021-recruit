<template>
  <div id="landing">
    <div class="bg">
      <div class="bg-img" />
      <div class="bg-mask" />
    </div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand>
        <img src="~assets/pdis-logo-final-inverse.jpg" alt="">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#origin">
            計畫緣起
          </b-nav-item>
          <b-nav-item href="#achievement">
            專案成果
          </b-nav-item>
          <b-nav-item href="#comment">
            見習心得
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <section id="title" class="container">
      <h1>RAY 4.0</h1>
      <span>Action by Youth .gov 2020</span>
      <h2>一場改造公部門網站的熱血行動！</h2>
      <p>
        2020 的暑假，<br>
        當 7 個政府網站，<br>
        遇上 30 位來自各方武林的青年好手，<br>
        究竟會擦出什麼火花呢？<br>
      </p>
      <a class="button" href="#achievement">
        前往專案成果
      </a>
    </section>
    <section id="origin" class="container">
      <div class="illustration">
        <div class="photo" />
        <div class="rectangle" />
      </div>
      <article>
        <h2>計畫緣起</h2>
        <h3>「網站改造，青年之事」</h3>
        <p>行政院國家發展委員會正著手進行政府網站數位服務改善，本次計畫將和國發會及相關部會協作，一同優化政府網站數位服務。</p>
        <p>本計畫將由國發會和欲改善數位服務的相關單位提供檢核清單，再經PDIS及見習同學篩選出與民眾關切議題直接相關的數位服務並進行檢核、設計出改善後的原型。專案開始時，我們會辦理講習工作坊；專案中，則透過設置線上討論及問答區，讓同學一同協作；另外也會定期辦理見面會，以確認進度和互相交流。</p>
      </article>
      <article>
        <h3>「改造網站的組合技——六步殺」</h3>
        <p>為確保工作重點一致、檢測後獲得明確結果，PDIS小組整理出適用於2019年RAY計畫的使用者體驗「設計六步驟」。在計畫開始時PDIS即舉辦工作坊，說明此六步驟及執行期程，同學需訪談相關使用者、確認問題以後，方能進行設計和產出原型。此設計六步驟除了讓同學們明確掌握自身專案進度，也可供往後相關單位參考。</p>
        <ul class="step">
          <li><img src="~/assets/6-steps/icon_unstanding_user.svg" alt=""><p>了解 User</p></li>
          <li><img src="~/assets/6-steps/icon_unstanding_user.svg" alt=""><p>議題定義</p></li>
          <li><img src="~/assets/6-steps/icon_unstanding_user.svg" alt=""><p>Wireframe</p></li>
          <li><img src="~/assets/6-steps/icon_unstanding_user.svg" alt=""><p>低擬真原型</p></li>
          <li><img src="~/assets/6-steps/icon_unstanding_user.svg" alt=""><p>高擬真原型</p></li>
          <li><img src="~/assets/6-steps/icon_unstanding_user.svg" alt=""><p>成果展示</p></li>
        </ul>
      </article>
      <div class="illustration">
        <div class="photo">
          <img src="~/assets/photo2.jpg" alt="">
        </div>
        <div class="rectangle" />
      </div>
      <div class="illustration">
        <div class="photo" />
        <div class="rectangle" />
      </div>
      <article>
        <h3>「主動出擊，部會共同參與」</h3>
      </article>
    </section>
    <section id="achievement">
      <h2>專案成果 <span class="triangle" /></h2>
      <div class="bg">
        <div class="bg-img" />
        <div class="bg-mask" />
      </div>
      <div class="wrapper">
        <template v-for="(project, index) in projects">
          <Project
            :key="index"
            :preview-image="project.previewImage"
            :title="project.title"
            :intro="project.intro"
            :tags="project.tags"
            :members="project.members"
          />
        </template>
      </div>
    </section>
    <section id="comment" class="container">
      <div class="title">
        <h2>見習心得</h2>
        <h3>「見習完了，學長姐們都在想什麼？」</h3>
      </div>
      <video
        class="image"
        src="~/static/intern.mp4"
        autoplay
        playsinline
        muted
        loop
      />
      <div class="intro">
        <p>行政院國家發展委員會正著手進行政府網站數位服務改善，本次計畫將和國發會及相關部會協作，一同優化政府網站數位服務。</p>
        <p>本計畫將由國發會和欲改善數位服務的相關單位提供檢核清單，再經PDIS及見習同學篩選出與民眾關切議題直接相關的數位服務並進行檢核、設計出改善後的原型。專案開始時，我們會辦理講習工作坊；專案中，則透過設置線上討論及問答區，讓同學一同協作；另外也會定期辦理見面會，以確認進度和互相交流。</p>
      </div>
      <div class="filter">
        <p>您可以透過下方的標籤，篩選欲瀏覽的相關文章：</p>
        <template v-for="(tag, i) in commentTags">
          <label :key="i">
            <input
              type="checkbox"
              v-model="selectedCommentTags"
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
export default {
  data () {
    return {
      projects: [
        {
          previewImage: 'placeholder_achievement_image.jpg',
          title: '台北市民服務大平台，\n從場地租用看見市民痛點。',
          intro: '行政院國家發展委員會正著手進行政府網站數位服務改善，本次計畫將和國發會及相關部會協作，一同優化政府網站數位服務。\n本計畫將由國發會和欲改善數位服務的相關單位提供檢核清單，再經PDIS及見習同學篩選出與民眾關切議題直接相關的數位服務並進行檢核、設計出改善後的原型。專案開始時，我們會辦理講習工作坊；專案中，則透過設置線上討論及問答區，讓同學一同協作；另外也會定期辦理見面會，以確認進度和互相交流。',
          tags: ['地方政府', '市民服務'],
          members: [
            {
              name: '孫若盈',
              avatar: null
            },
            {
              name: '李彤',
              avatar: null
            },
            {
              name: '李佩芸',
              avatar: null
            },
            {
              name: '張硯涵',
              avatar: null
            }
          ]
        }
      ],
      comments: require('~/static/meta.json'),
      selectedCommentTags: []
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
    this.shuffleComments()
  },
  methods: {
    shuffleComments () {
      this.comments = this.comments.sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<style>
.navbar {
  position: relative;
  z-index: 999;
}
.navbar-brand > img {
  width: 5rem;
}

@media screen and (min-width: 992px) {
  nav.navbar-expand-lg {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 'navbar-collapse navbar-brand';
  }
  .navbar-brand {
    margin-left: 2.5rem;
    grid-area: navbar-brand;
  }
  .navbar-collapse {
    grid-area: navbar-collapse;
  }
  .nav-link {
    padding-left: 1.25rem !important;
    padding-right: 1.25rem !important;
  }
}

.navbar-nav {
  font-size: 1.5rem;
}

section {
  margin-bottom: 7.5em;
}

#landing > .bg {
  overflow: hidden;
  max-width: 1440px;
}

#landing > .bg > .bg-img {
  position: absolute;
  background-image: url('~assets/title-bg.jpg');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

#landing > .bg > .bg-mask {
  position: absolute;
  background: rgba(17, 16, 16, 0.85);
  width: 100%;
  height: 100%;
}

a.button {
  font-weight: 700;
  color: #fff;
  background-color: var(--color-ray);
  padding: .5rem 2rem;
  width: max-content;
  border-radius: 20px;
  border-color: var(--color-ray);
  border-style: solid;
  font-size: 1.25rem;
  line-height: 1.2;
}

#origin h2, #achievement h2, #comment h2 {
  font-size: 2rem;
  color: var(--color-ray);
}

/** -------------------Title------------------- **/
#title {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: calc(-1rem - 0.625rem - 80px);
  color: #fff;
  padding-left: 9em;
  padding-right: 9em;
}

#title h1 {
  font-size: 4rem;
  margin-bottom: 0;
}

#title h2 {
  font-size: 2.25rem;
  color: var(--color-ray);
}

#title span {
  font-size: 1.5rem;
  font-weight: 500;
}

#title p {
  font-size: 1.5rem;
}

@media screen and (max-width: 767px){
  #title {
    padding-left: 3em;
    padding-right: 3em;
  }
}

/** -------------------Origin------------------- **/

#origin {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(6, auto);
  align-items: center;
}

@media screen and (min-width: 768px) {
  #origin {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(3, auot);
  }

  .illustration:nth-child(4n+1) {
    grid-column: 1 / 2;
  }

  .illustration:nth-child(4n) {
    grid-column: 3 / 4;
  }

  article:nth-child(4n+2) {
    grid-column: 2 / 4;
  }

  article:nth-child(4n+3) {
    grid-column: 1 / 3;
  }

}

.illustration {
  position: relative;
}

article {
  margin: 2.5em;
}

.illustration:first-child .photo {
  max-width: 560px;
  max-height: 640px;
  width: 38.88vw;
  height: 44.44vw;
  background-image: url('~assets/photo1.jpg');
  background-size: cover;
  background-position: center center;
  filter: grayscale(1);
  margin-right: min(2.77vw, 2.5em);
}

.illustration:first-child .rectangle {
  width: 41.66vw;
  height: 11.11vw;
  max-width: 600px;
  max-height: 160px;
  background-color: var(--color-ray-alpha);
  position: absolute;
  margin-top: max(calc(-11.11vw - 2.36vw), calc(-160px - 34px));
}

.illustration:nth-child(4) .photo {
  max-width: 528px;
  max-height: 738.12px;
  width: 36.66vw;
  height: 51.25vw;
  overflow: hidden;
  /* sine(15deg) = 0.2582 padding-left = h_Img/2 * sine(15deg) */
  padding-left: min(calc(42.01vw / 2 * 0.2582), calc(605px / 2 * 0.2582));
}

.illustration:nth-child(4) .photo img {
  transform: rotate(-15deg);
  max-width: 594px;
  max-height: 605px;
  width: 41.25vw;
  height: 42.01vw;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.illustration:nth-child(4) .rectangle {
  max-width: 180px;
  max-height: 400px;
  width: 12.5vw;
  height: 27.77vw;
  background-color: var(--color-ray-alpha);
  position: absolute;
  right: 0;
  top: min(200px, 13.88vw);
}

#origin ul.step {
  margin: 1.5em 0;
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: sretch;
  align-items: center;
  justify-items: center;
}

#origin ul.step li > img {
  width: max(min(7.5em, 8.33vw), 60px);
  margin: .5em 0;
}

#origin ul.step li {
  text-align: center;
}

@media screen and (max-width: 991px) {
  #origin ul.step {
    grid-template-columns: repeat(3, auto);
  }
}

.illustration:nth-child(5) .photo {
  max-width: 560px;
  max-height: 640px;
  width: 38.88vw;
  height: 44.44vw;
  background-image: url('~assets/photo3.jpg');
  background-size: cover;
  background-position: center center;
  filter: grayscale(1);
  margin-right: min(2.77vw, 2.5em);
}

.illustration:nth-child(5) {
  margin-top: min(5.556vw, 80px);
}

.illustration:nth-child(5) .rectangle {
  width: 27.77vw;
  height: 27.77vw;
  max-width: 400px;
  max-height: 400px;
  background-color: var(--color-ray-alpha);
  position: absolute;
  margin-top: max(calc(-5.556vw - 44.44vw), calc(-80px - 640px));
}

@media screen and (max-width: 767px) {
  .illustration:first-child {
    grid-row: 1 / 2;
  }

  article:nth-child(2) {
    grid-row: 2 / 3;
  }

  article:nth-child(3) {
    grid-row: 4 / 5;
  }

  .illustration:nth-child(4) {
    grid-row: 3 / 4;
  }

  .illustration:nth-child(5) {
    grid-row: 5 / 6;
  }

  article:nth-child(6) {
    grid-row: 6 / 7;
  }

  .illustration:first-child .photo {
    width: 85vw;
    height: 97.14vw;
  }

  .illustration:first-child .rectangle {
    width: 91.07vw;
    height: 24.28vw;
    margin-top: calc(-24.28vw - 5.16vw);
  }

  .illustration:nth-child(4) .photo {
    width: 85vw;
    height: 118.83vw;
  }
  .illustration:nth-child(4) .photo img {
    width: 95.625vw;
    height: 97.395vw;
    padding-left: calc(48.697vw / 2 * 0.2582);
  }

  .illustration:nth-child(4) .rectangle {
    background-color: var(--color-ray-alpha);
    position: absolute;
    right: 0;
    width: 28.977vw;
    height: 64.393vw;
    top: 32.196vw;
  }

  .illustration:nth-child(5) {
    margin-top: 16.098vw;
  }

  .illustration:nth-child(5) .photo {
    width: 85vw;
    height: 97.14vw;
  }

  .illustration:nth-child(5) .rectangle {
    width: 60.71vw;
    height: 60.71vw;
    margin-top: calc(-12.14vw - 97.14vw);
  }
}

/** -------------------Achievement------------------- */

#achievement {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto 9.5em auto 9.5em;
  grid-template-areas: 'title title title' '. . .' '. project .' '. . .';
}

#achievement h2 {
  grid-area: title;
  position: relative;
  text-align: center;
  margin-bottom: 1.5em;
}

#achievement h2 .triangle {
  position: absolute;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 18px solid var(--color-ray);
  top: 12px;
  margin-left: 6px;
}

#achievement .wrapper {
  grid-area: project;
}

#achievement > .bg {
  grid-column: 1 / 4;
  grid-row: 2 / 5;
  position: relative;
}

#achievement > .bg > .bg-img,
#achievement > .bg > .bg-mask {
  position: absolute;
  width: 100%;
  height: 100%;
}

#achievement > .bg > .bg-img {
  filter: grayscale(1);
  background-image: url('~assets/achievement-bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: .85;
}

#achievement > .bg > .bg-mask {
  background:  radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(139, 139, 139, 0.5695) 0.01%, rgba(31, 31, 31, 0.85) 100%);
}

@media screen and (max-width: 767px) {
  #achievement {
    grid-template-rows: auto 2.5em auto 2.5em;
  }
}

/** -------------------Comment------------------- */
#comment {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas: 'title image' 'intro image' 'filter filter' 'comments comments';
  justify-content: center;
  justify-items: center;
  padding: 0 min(7.5em, 8.33vw);
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

#comment .comments {
  grid-area: comments;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2em;
  grid-row-gap: 2em;
}

@media screen and (max-width: 992px) {
  #comment {
    grid-template-columns: auto;
    grid-template-areas: 'title' 'image' 'intro' 'filter' 'comments';
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

@media screen and (max-width: 1200px) {
  #comment .comments {
    grid-template-columns: auto;
  }
}
</style>
