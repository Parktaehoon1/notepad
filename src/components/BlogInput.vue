<template>
	<div class="input-wrap shadow">
		<input type="text" v-model="newItem" class="input-box" maxlength="30" @keyup.enter="addItem">
		<span @click="addItem" class="add-bt">
			<i class="fas fa-plus add-bt-icon"></i>
		</span>
	</div>
</template>

<script>
	import {
		ref
	} from 'vue';

	export default {
		setup() {
			const newItem = ref('');
			const addItem = () => {
				let temp = newItem.value;
				temp = temp.trim();
				let checktemp = temp.replace(/\s/g, "");
				// 추후 업데이트 예정(정규표현식-문자열체크 문법)
				// 앞자리공백 공백 뒷자리공백
				if (temp !== '' && temp === checktemp) {
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
					localStorage.setItem(temp, temp);
					resetItem();
				} else {
					alert('공백쳤음');
				}
				/*
				let reg = /\s/g;
				let checkNewItem = newItem.value.replace(/\s/g, "");
				if(newItem.value === reg && checkNewItem){
					localStorage.setItem(temp, temp)
						alert('공백아님')
					} else {
					alert('공백치지마세여')
				}
				newItem.value = '';
				*/
			}
			// 내용 재설정
			const resetItem = () => {
				newItem.value = '';
			}
			return {
				newItem,
				addItem
			}
		}
	}
</script>

<style scoped>
	.input-wrap {
		position: relative;
		display: block;
		height: 50px;
		line-height: 50px;
		border-radius: 5px;
		background-color: #fff;
		overflow: hidden;

		margin: 20px 0;
	}

	.input-wrap input {
		border-style: none;
	}

	.input-wrap input:focus {
		outline: none;
	}

	.input-box {
		width: calc(90% - 60px);
		margin-left: 20px;
		font-size: 16px;
		font-weight: 700;
	}


	.add-bt {
		display: block;
		float: right;
		background-color: lightgray;
		cursor: pointer;

	}

	.add-bt-icon {
		display: inline-block;
		vertical-align: middle;
		color: #fff;
		margin: 0 20px;
	}
</style>