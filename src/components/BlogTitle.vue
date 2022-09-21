<template>
    <div class="title" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        <p class="sayhello">Good Morning</p>
        <p class="title-task">
            You've got
            <span class="title-task-total">{{ taskTotal }}</span> tasks today.
        </p>
    </div>
</template>

<script>
    import {
        computed
    } from 'vue';
    import {
        useStore
    } from 'vuex';
    export default {
        setup() {
            const store = useStore()
            const taskTotal = computed(() => store.getters.getMemoCount)
            return {
                taskTotal,
            };
        },
    }
</script>




<style scoped>
    .title {
        position: relative;
        display: block;
    }
    .sayhello{
        font-size: 30px;
        font-weight: 500;
        font-family: 'Qwitcher Grypen';
        color: #333;
    }
    .title-task {
        font-size: 30px;
        font-weight: 500;
        font-family: 'Qwitcher Grypen';
        color: #333;
    }

    .title-task-total {
        font-size: 50px;
        font-weight: 700;
        font-family: 'Qwitcher Grypen';
        color: #62acde;
    }


</style>