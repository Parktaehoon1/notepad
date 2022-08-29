<template>
  <div class="wrap">
    <BlogHeader />
    <BlogInput @additem="addMemo" />
    <BlogList :memodata="memoItemArr" @removeitem="deleteMemo" @updateitem="updateMemo" />
    <BlogFooter @clearitem="clearMemo"/>
  </div>
</template>

<script>
  import {
    ref,
    reactive
  } from 'vue';
  import BlogHeader from "@/components/BlogHeader.vue";
  import BlogInput from "@/components/BlogInput.vue";
  import BlogList from "@/components/BlogList.vue";
  import BlogFooter from "@/components/BlogFooter.vue";
  export default {
    components: {
      BlogHeader,
      BlogInput,
      BlogList,
      BlogFooter
    },
    setup() {
      const total = ref(0);
      total.value = localStorage.length; // 값을 숫자로 받기 위해서 ref를 사용
      // 데이터를 저장하는 배열
      const memoItemArr = reactive([]);
      if (total.value > 0) {
        for (let i = 0; i < total.value; i++) {
          let obj = localStorage.getItem(localStorage.key(i));
          console.log("키값", obj)
          memoItemArr.push(JSON.parse(obj))
        }
        // 키 값을 이용해서 정렬하기(오름차순)
        // memoItemArr.sort();
      }
      const deleteMemo = (item, index) => {
        console.log(item);
        console.log(index);
        // localStorage에서 key를 통해지운다
        localStorage.removeItem(item);
        // 배열에서도 지운다.
        memoItemArr.splice(index, 1);
      }
      const updateMemo = (item) => {
        console.log(item)
        // localStorage 에서는 Update 메소드를 지원하지 않습니다..ㅠ
        // 찾아서 지우고, 
        localStorage.removeItem(item.id);
        // 변경한다.
        item.complete = !item.complete;
        // 다시 set 한다.
        localStorage.setItem(item.id, JSON.stringify(item));
      }
      const addMemo = (item) => {
        const addZero = (n) => {
				return n < 10 ? '0' + n : n;
			}
			// 현재 시간을 리턴
			const getCurrentDate = () => {
				let date = new Date();
				return date.getFullYear().toString() + addZero(date.getMonth() + 1) + addZero(date.getDate()) +
					addZero(date.getHours()) + addZero(date.getMinutes()) + addZero(date.getSeconds());
			}
        let memoTemp = {
						id: getCurrentDate(),
						complete: false,
						memotitle: item,
					}
        console.log("item", item);
        localStorage.setItem(memoTemp.id, JSON.stringify(memoTemp));
        // 화면갱신을 위한 배열 요소 추가
        memoItemArr.push(memoTemp)
      }
      const clearMemo = () => {
			// localStorage 에서 내용 전체 삭제
			// 추후 DB 연동 예정
			localStorage.clear();
      memoItemArr.splice(0);
      }

      return {
        memoItemArr,
        deleteMemo,
        updateMemo,
        addMemo,
        clearMemo
      }
    }
  }
</script>

<style>
  @charset 'utf-8';
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

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
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.64;
    color: #000;
    background-color: #f6f6f6;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
  }

  .wrap {
    position: relative;
    display: block;
    width: 90%;
    margin: 0 auto;
  }
</style>