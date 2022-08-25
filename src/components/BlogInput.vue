<template>
	<div class="input-wrap">
		<input type="text" v-model="newItem">
		<button v-on:click="addItem">추가</button>
	</div>
</template>

<script>
	import { ref } from 'vue';

	export default {
		setup() {
			const newItem = ref('');
			const addItem = () => {
				let temp = newItem.value;
				//localStorage.setItem(키, 값)
				//localStorage.setItem(키, json 문자열로 저장)
				// json 저장 문자열은
				/*
					{
						completed: false, 
						title: '메모내용', 
						icon: 파일명 
					}
				*/
				localStorage.setItem(temp, temp)
				newItem.value= '';
			}
			return {
				newItem,addItem
			}
		}
	}
</script>

<style>

</style>