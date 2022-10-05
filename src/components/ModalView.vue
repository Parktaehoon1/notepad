<template>
  <!-- 모달창 -->
  <div class="modal-wrap">
    <div class="modal-main">
      <div class="modal-up">
        <span class="btn1"></span>
        <span class="btn2"></span>
        <span class="btn3"></span>
      </div>
      <div class="modal-bottom">
        <h1>TODOLIST</h1>
        <p class="modal-desc">
          이 사이트는 <span class="checkfont">스터디용</span>으로
          제작되었습니다.
        </p>
        <p class="modal-chrome">
          본 사이트는 <span class="checkfont">Chrome</span> 에 최적화되어
          있습니다.😊
        </p>

        <p class="modal-study">
          1. php활용하여 제작하였습니다.<br />
          2. LIST 추가 및 삭제 기능 추가 하였습니다.<br />
          3. 전체 삭제 기능 추가하였습니다.<br />
        </p>

        <button class="modal-close">
          <!-- <i class="fas fa-times"></i> -->
          CLOSE
        </button>
        <p class="warning">
          해당 사이트 관련 문제 사항이 있으시면 연락 부탁드립니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      // 모달창
      let modalWrap = $(".modal-wrap");
      let modalClose = $(".modal-close");

      modalClose.click(function () {
        modalWrap.stop().fadeOut(500);
        // 추가기능 : 스크롤바 살리기
        // $('html').css('overflow', 'auto');
      });
      let modalMain = $(".modal-main");
      //내용 배경 클릭
      modalMain.click(function (event) {
        // 클릭 정보 전달 막기
        event.stopPropagation();
      });
      //전체 배경 클릭
      modalWrap.click(function () {
        modalWrap.stop().fadeOut(500);
        // 추가기능 : 스크롤바 살리기
        // $('html').css('overflow', 'auto');
      });
      $("html").keydown(function (key) {
        if (key.keyCode == 13) {
          modalWrap.stop().fadeOut(200);
          $("html").css("overflow", "auto");
        }
      });
    });
    return {};
  },
};
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,600,700,800);
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

@font-face {
  font-family: "GmarketSansLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "GmarketSansBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

/* 모달창 */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  font-family: "Open Sans", GmarketSansMedium, GmarketSansLight, GmarketSansBold,
    "맑은 고딕", "돋움", Dotum, "굴림", Gulim, Sans-serif;
}

.modal-main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
}

.modal-up {
  position: relative;
  display: flex;
  width: 100%;
  height: 8%;
  padding: 0 10px;
  align-items: center;
  /* background-color: #f5f3f7; */
  background: linear-gradient(360deg, #f5f3f7 10%, #e9e9e9 360%);
  border-radius: 8px 8px 0 0;
}
.modal-up span {
  margin-left: 5px;
}
.btn1 {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgb(216, 17, 17);
}
.btn2 {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: orange;
}
.btn3 {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: greenyellow;
}

.modal-bottom {
  position: relative;
  display: block;
  height: 90%;
  background-color: #ffffff;
}

.modal-main h1 {
  position: relative;
  display: block;
  width: 100%;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  color: #333;
  padding-top: 20px;
}

.modal-desc {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  line-height: 1.8;
}
.modal-chrome {
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  line-height: 1.8;
}
.modal-study {
  position: relative;
  display: block;
  width: 75%;
  height: 100px;
  background: linear-gradient(360deg, #f5f3f7 10%, #e9e9e9 360%);
  padding: 5px;

  margin: 20px auto;
  text-align: left;
  font-size: 15px;
  font-weight: 400;
  font-weight: 700;
  color: #111;
  line-height: 1.8;
}

.checkfont {
  font-weight: 600;
  text-decoration: underline;
  color: #ed1c24;
}

.modal-main h2 {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #000;
  padding: 20px 0;
}

.modal-main .modal-list {
  text-align: left;
  padding: 10px 80px;
}

.modal-close {
  position: relative;
  display: block;
  width: 100px;
  margin: 10px auto;
  padding: 5px 10px;
  border: 1px solid #000;
  cursor: pointer;
  font-size: 20px;
  background: #000;
  color: #fff;
  border-radius: 10px;
  transition: all 0.5s;
}

.modal-close:hover {
  color: red;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}

.warning {
  font-size: 12px;
  text-align: center;
}
</style>
