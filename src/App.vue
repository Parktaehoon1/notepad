<template>
    <div class="wrap">
      <BlogHeader />
      <BlogTitle />
      <BlogInput />
      <BlogList />
      <BlogFooter />
      <IntroView @closeintro="hideIntro" v-if="introShow" />

    </div>
</template>

<script>
  import {
    ref
  } from 'vue';
  import BlogHeader from "@/components/BlogHeader.vue";
  import BlogTitle from "@/components/BlogTitle.vue";
  import BlogInput from "@/components/BlogInput.vue";
  import BlogList from "@/components/BlogList.vue";
  import BlogFooter from "@/components/BlogFooter.vue";
  import IntroView from "@/components/IntroView.vue";
  export default {
    components: {
      BlogHeader,
      BlogTitle,
      BlogInput,
      BlogList,
      BlogFooter,
      IntroView
    },

    setup() {
      // 첫 화면(introView) 보여질 여부
      const introShow = ref(false)
      const hideIntro = () => {
        introShow.value = false;
      }
      return {
        hideIntro,
        introShow
      }
    }

  }
</script>

<style>
  @charset 'utf-8';
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  body {
    font-family: 'Roboto', 'Noto Sans KR', 'Qwitcher Grypen', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.64;
    color: #000;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
  }

  .wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: block;
    width: 80%;
    height: 800px;
    margin: 0 auto;
    padding: 20px;
    background: url('./assets/images/background.jpg');
    border: 1px solid #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}


</style>