<template>
	<div class="list-wrap">
		<ul>
			<!-- v-for in :key -->
			<li v-for="(item, index) in memoItemArr" :key="index" class="shadow">
				<i class="far fa-check-circle check-bt" @click="updateMemo(item, index)"
					:class="{memoComplete:item.complete}"></i>

				<span :class="{memoCompleteTxt:item.complete}">{{item.memotitle}}</span>

				<span class="remove-bt" @click="removeMemo(item.id, index)">
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
					// 키값도 필요하지만, 실제 내용(값)이 필요하다.
					let obj = localStorage.getItem(localStorage.key(i));
					console.log("키값", obj)
					// memoItemArr.push(localStorage.key(i))
					memoItemArr.push(JSON.parse(obj))
				}
				// 키 값을 이용해서 정렬하기(오름차순)
				memoItemArr.sort();
			}
			const removeMemo = (item, index) => {
				// localStorage에서 key를 통해지운다
				localStorage.removeItem(item);
				// 배열에서도 지운다.
				memoItemArr.splice(index, 1);
			}

			const updateMemo = (item) => {
				// localStorage 에서는 Update 메소드를 지원하지 않습니다..ㅠ
				// 찾아서 지우고, 
				localStorage.removeItem(item.id);
				// 변경한다.
				item.complete = !item.complete;
				// 다시 set 한다.
				localStorage.setItem(item.id, JSON.stringify(item));

			}

			return {
				memoItemArr,
				removeMemo,
				updateMemo
			}
		}
	}
</script>

<style scoped>
	li {
		display: flex;
		/* justify-content: space-between; */
		min-height: 50px;
		line-height: 50px;
		margin: 10px 0;
		background-color: #fff;
		border-radius: 5px;
		padding: 0 20px;
	}

	.remove-bt {
		cursor: pointer;
		margin-left: auto;
		color: gray;
	}

	.check-bt {
		color: #62acde;
		line-height: 50px;
		margin-right: 10px;
		cursor: pointer;
	}

	.memoComplete {
		color: #b3adad;
	}

	.memoCompleteTxt {
		color: #b3adad;
		text-decoration: line-through;
	}
</style>