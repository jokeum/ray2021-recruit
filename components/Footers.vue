<template>
  <footer>
    <div class="wrapper container">
      <section class="about">
        <h4>關於 PDIS</h4>
        <p>PDIS 協助政府部會提升數位服務品質，以服務設計思維優化公務體系的流程和工具，並導引公部門採納社會創新，與民間社群協作，進而促成連結臺灣和世界的生態系。</p>
        <ul>
          <li>
            <a href="https://pdis.nat.gov.tw" target="_blank">
              <div class="pdis-website">
                <b-img
                  src="~assets/pdis-logo-final-inverse.jpg"
                  alt="PDIS 首頁"
                />
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/PdisTwGov" target="_blank">
              <div class="pdis-youtube">
                <b-img
                  src="~assets/yt_icon.png"
                  alt="PDIS Youtube Channel"
                /></div>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TaiwanPDIS" target="_blank">
              <div class="pdis-twitter">
                <b-img
                  src="~assets/tw_itter_icon.svg"
                  alt="PDIS Twitter"
                /></div>
            </a>
          </li>
        </ul>
      </section>
      <section class="links">
        <h4>相關連結</h4>
        <ul>
          <li><a href="https://github.com/pdis/ray2020" target="_blank">網站原始碼</a></li>
          <li><a href="https://www.yda.gov.tw/" target="_blank">教育部青年發展署</a></li>
          <li><a href="https://www.ndc.gov.tw/Content_List.aspx?n=6F34DB9055D5FBB3" target="_blank">政府數位服務指引</a></li>
        </ul>
      </section>
      <section class="history">
        <h4>歷年成果</h4>
        <ul>
          <li><a href="https://ray2017.pdis.nat.gov.tw" target="_blank">2017 年 - RAY 1.0</a></li>
          <li><a href="https://talk.pdis.nat.gov.tw/tags/%E5%B7%B2%E6%AA%A2%E6%9F%A5" target="_blank">2018 年 - RAY 2.0</a></li>
          <li><a href="https://ray2019.pdis.nat.gov.tw" target="_blank">2019 年 - RAY 3.0</a></li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
  background-color: var(--color-ray);
}

footer > .wrapper {
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
  grid-template-areas: 'about links history';
  column-gap: 1.5em;
  color: white;
  padding: 2.5em 1.5em;
}

@media screen and (max-width: 991px) {
  footer > .wrapper {
    grid-template-columns: 3fr repeat(2, 2fr);
  }
}

@media screen and (max-width: 767px) {
  footer > .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    row-gap: 1.5em;
    grid-template-areas: 'about' 'links' 'history';
  }
}

footer > .wrapper >section {
  margin-bottom: 0;
}

footer a:hover, footer a:visited, footer a {
  color: white;
}

footer > .wrapper >section > ul {
  list-style: none;
  padding-left: 0;
  font-size: 1.1rem;
}

footer > .wrapper >section.about {
  grid-area: about;
}

footer > .wrapper >section.about > ul {
  display: flex;
}

footer > .wrapper >section.about > ul li > a > div {
  padding: 10px;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 .5em;
  overflow: hidden;
}

footer > .wrapper >section.about > ul li > a > div {
  transition: box-shadow .3s;
}

footer > .wrapper >section.about > ul li > a:hover > div {
  box-shadow: 0 0 24px rgba(33,33,33,.5);
}

footer > .wrapper >section.about > ul li > a > div.pdis-website > img {
  width: 60px;
}

footer > .wrapper >section.about > ul li > a > div.pdis-twitter > img {
  width: 60px;
  height: 60px;
}

footer > .wrapper >section.about img {
  width: 30px;
}

footer > .wrapper >section.links {
  grid-area: links;
}

footer > .wrapper >section.history {
  grid-area: history;
}
</style>
