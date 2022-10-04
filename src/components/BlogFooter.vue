<template>
  <div class="clear-all-wrap">
    <span class="clear-all-bt" @click="clearAllMemo"
      >Clear All<i class="far fa-trash-alt"></i
    ></span>
    <span class="copy">&copy; Copyright 2022 by Taehoon</span>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const clearAllMemo = () => {
      // context.emit('clearitem')
      // store.commit('CLEAR_MEMO');
      store.dispatch("fetchClearMemo");
    };
    return {
      clearAllMemo,
    };
  },
};
</script>

<style>
.clear-all-wrap {
  position: relative;
  display: block;
  width: 100%;
  /* height: 50px; */
  line-height: 50px;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  color: #fff;
}

.clear-all-bt {
  position: relative;
  display: inline-block;
  width: 80%;
  height: 50px;
  cursor: pointer;
  color: #fff;
  background: #62acde;
  border-radius: 5px;
  margin: 10px;
}

.far {
  margin-left: 20px;
}
.copy {
  position: relative;
  display: block;
  font-size: 9px;
  white-space: nowrap;
}
</style>
