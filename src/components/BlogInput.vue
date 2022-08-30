<template>
	<div class="input-wrap shadow">
		<input type="text" v-model="newItem" class="input-box" maxlength="30" @keyup.enter="addItem">
		<div class="option">
			<span @click="addIcon(0)" class="img1">
				이미지1
			</span>
			<span @click="addIcon(1)" class="img2">
				이미지2
			</span>
			<span @click="addIcon(2)" class="img3">
				이미지3
			</span>

			<span @click="addItem" class="add-bt">
				<i class="fas fa-plus add-bt-icon"></i>
			</span>
		</div>
		<!-- 안내창 -->
			<ModalView :show="showModal" v-on:closemodal="showModal=false">
				<template #header>
					<h3>안내창</h3>
				</template>
				<template #body>
					<h2>내용을 작성하여주세요.</h2>
				</template>
			</ModalView> <!--slot을 사용하려면 일캐해야됨 -->
	</div>
</template>

<script>
	import {
		ref
	} from 'vue';

	import ModalView from '@/components/common/ModalVue.vue';
	export default {
		components:{
			ModalView
		},
		setup(props, context) {

			const newItem = ref('');
			const newIcon = ref(0);
			const showModal = ref(false);

			const addItem = () => {
				let temp = newItem.value;
				let icon = newIcon.value;
				temp = temp.trim();
				// 추후 업데이트 예정(정규표현식-문자열체크 문법)
				let checktemp = temp.replace(/\s/g, "");
				// 앞자리공백 공백 뒷자리공백
				if (temp !== '' && temp === checktemp) {
					context.emit('additem', temp, icon); // 에밋으로 어미한테 값 전달 
					resetItem();
				} else {
					showModal.value = true;
				}
			}
			// 내용 재설정
			const resetItem = () => {
				newItem.value = '';
			}
			const addIcon = (index) => {
				console.log(index)
				newIcon.value = index
			}

			return {
				newItem,
				addItem,
				addIcon,
				showModal
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
		width: calc(90% - 250px);
		margin-left: 20px;
		font-size: 16px;
		font-weight: 700;
	}

	.option{
		position: absolute;
		right: 0;
		top: 0;
		display: block;
		float: right;
	}
	.img1:active,
	.img2:active,
	.img3:active{
		outline: 3px solid red;
	}

	.img1 {
		display: inline-block;
		width: 40px;
		height: 40px;
		font-size: 0;
		cursor: pointer;
		background: url('@/assets/images/workout.png') no-repeat center;
		background-size: cover;
	}

	.img2 {
		display: inline-block;
		width: 40px;
		height: 40px;
		font-size: 0;
		cursor: pointer;
		background: url('@/assets/images/study.png') no-repeat center;
		background-size: cover;
	}
	.img3 {
		display: inline-block;
		width: 40px;
		height: 40px;
		font-size: 0;
		cursor: pointer;
		background: url('@/assets/images/stars.png') no-repeat center;
		background-size: cover;
	}


	.add-bt {
		display: inline-block;
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