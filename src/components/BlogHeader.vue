<template>
	<header class="header">
		<h1>{{title}}</h1>
	</header>
</template>

<script>
	import {ref} from 'vue';
	import {useStore} from 'vuex';
	export default {
		setup(){
			const title = ref('');
			const store = useStore();
			title.value = store.getters.getHeaderTitle;

			return{
				title
			}
		}
	}
</script>

<style scoped>
	h1 {
		text-align: center;
		font-size: 50px;
		font-weight: 400;
		margin: 20px 0;
		font-family: 'Qwitcher Grypen';
	}
</style>