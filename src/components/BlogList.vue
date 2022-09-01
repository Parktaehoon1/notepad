<template>
	<div class="list-wrap">

		<TransitionGroup name="list" tag="ul">
			<!-- <ul> -->
			<!-- v-for in :key -->
			<li v-for="(item, index) in items" :key="index" class="shadow">
				<i class="far fa-check-circle check-bt" @click="updateMemo(item, index)"
					:class="{memoComplete:item.complete}"></i>
				<span :class="{memoCompleteTxt:item.complete}">{{item.memotitle}}</span>
				
				<div class="info">
					<span class="icon"
						:style="{backgroundImage:'url(' + require(`@/assets/images/${item.memoicon}`) + ')'}"></span>
					<span class="date">{{item.memodate}}</span>
					<span class="remove-bt" @click="removeMemo(item.id, index)">
						<i class="fas fa-trash-alt"></i>
					</span>
				</div>
			</li>
			<!-- </ul> -->
		</TransitionGroup>


	</div>
</template>

<script>
	import {
    computed,
	} from 'vue';
	import {
		useStore
	} from 'vuex';
	export default {
		setup() {
			// vuex사용
			const store = useStore();
			const items = computed( () => store.getters.getMemoArr);
			
			const removeMemo = (item, index) => {
				// context.emit("removeitem", item, index);
				// store.commit('DELETE_MEMO', {item,index})
				store.dispatch('fetchDeleteMemo', {item,index})
				// localStorage에서 받아는거라 dispatch하고 action의 메서드네임
			}
				// dispatch 옆에는 actions 이름이 들어옴
			const updateMemo = (item, index) => {
				// context.emit("updateitem", item, index)
				// store.commit('UPDATE_MEMO', {item,index})
				store.dispatch('fetchUpdateMemo', {item,index})
			}

			return {
				removeMemo,
				updateMemo,
				items
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
		margin-left: 10px;
		color: gray;
	}

	.check-bt {
		color: #62acde;
		line-height: 50px;
		margin-right: 10px;
		cursor: pointer;
	}

	.info {
		position: relative;
		margin-left: auto;
		font-size: 8px;
	}

	.icon {
		position: absolute;
		right: 65px;
		top: 50%;
		transform: translateY(-50%);
		display: block;
		width: 40px;
		height: 40px;
		margin-right: 10px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.date {}

	.memoComplete {
		color: #b3adad;
	}

	.memoCompleteTxt {
		color: #b3adad;
		text-decoration: line-through;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>