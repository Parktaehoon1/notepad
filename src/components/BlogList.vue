<template>
	<div class="list-wrap">
		<ul>
			<!-- v-for in :key -->
			<li v-for="(item, index) in memoItemArr" :key="index" class="shadow">
				{{item}}
				<span class="remove-bt" @click="removeMemo(item, index)">
					<i class="fas fa-trash-alt"></i>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import {
		ref,
		reactive
	} from 'vue';
	export default {
		setup() {
			// Localstorage의 목록을 가지고 오기
			console.log(localStorage);
			// 전체개수
			const total = ref(0);
			total.value = localStorage.length; // 값을 숫자로 받기 위해서 ref를 사용
			console.log(total.value)
			//  키네임을 저장하는 배열
			const memoItemArr = reactive([]);

			if (total.value > 0) {
				for (let i = 0; i < total.value; i++) {
					// 배열에 요소를 밀어넣는다.
					memoItemArr.push(localStorage.key(i))
				}
			}
			const removeMemo = (item, index) => {
				// localStorage에서 key를 통해지운다
				localStorage.removeItem(item);
				// 배열에서도 지운다.
				memoItemArr.splice(index, 1);
			}
			return {
				memoItemArr,removeMemo
			}
		}
	}
</script>

<style scoped>
	li{
		display: flex;
		/* justify-content: space-between; */
		min-height: 50px;
		line-height: 50px;
		margin: 10px 0;
		background-color: #fff;
		border-radius: 5px;
		padding: 0 20px;
	}
	.remove-bt{
		cursor: pointer;
		margin-left: auto;
		color: gray;
	}
</style>