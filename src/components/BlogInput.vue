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
			// 현재 시간값을 계산해서 중복이 되지 않는 값을 처리한다.
			// 용도는 key와 id를 생성해 주기 위해서 처리
			// 10보다 작은 값에 0을 붙임

			const addZero = (n) => {
				return n < 10 ? '0' + n : n;
			}
			// 현재 시간을 리턴
			const getCurrentDate = () => {
				let date = new Date();
				return date.getFullYear().toString() + addZero(date.getMonth() + 1) + addZero(date.getDate()) +
					addZero(date.getHours()) + addZero(date.getMinutes()) + addZero(date.getSeconds());
			}

			const addItem = () => {
				let temp = newItem.value;
				temp = temp.trim();
				// 추후 업데이트 예정(정규표현식-문자열체크 문법)
				let checktemp = temp.replace(/\s/g, "");
				// 앞자리공백 공백 뒷자리공백
				if (temp !== '' && temp === checktemp) {

					let memoTemp = {
						id: getCurrentDate(),
						complete: false,
						memotitle: newItem.value,
					}

					// console.log("어떤형식?",JSON.stringify(memoTemp));  // "":"" 이형식으로감
					// 추후 실제 DB 연동 예정
					localStorage.setItem(memoTemp.id, JSON.stringify(memoTemp));
					resetItem();
				} else {
					alert('공백쳤음');
				}
			}
			// 내용 재설정
			const resetItem = () => {
				newItem.value = '';
			}
			return {
				newItem,
				addItem,
				getCurrentDate
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