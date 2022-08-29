<template>
	<div class="list-wrap">
		<ul>
			<!-- v-for in :key -->
			<li v-for="(item, index) in memodata" :key="index" class="shadow">
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
	export default {
		props:['memodata'],
		setup(props, context) {

			const removeMemo = (item, index) => {
				context.emit("removeitem", item, index);
			}

			const updateMemo = (item) => {
				context.emit("updateitem", item)
			}

			return {
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