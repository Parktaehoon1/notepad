<template>
    <div class="title" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        <p class="message">Hello{{ message }}</p>
        <p class="title-task">
            You've got
            <span class="title-task-total">{{ taskTotal }}</span> tasks today.
        </p>
    </div>
</template>

<script>
    export default {
        methods: {
            mouseover: function () {
                document.querySelector('.title').style.color = 'red';
            },
            mouseleave: function () {
                document.querySelector('.title').style.color = 'black';
            }
        },
        setup() {
            return {
                message: "User.",
                taskTotal: 5,
                disabled: false,

            };
        },
    }
</script>




<style scoped>
    .title {
        position: relative;
        display: block;
    }

    .message {
        font-size: 30px;
        font-weight: 500;
        font-family: 'Qwitcher Grypen';
    }

    .title-task {
        font-size: 30px;
        font-weight: 500;
        font-family: 'Qwitcher Grypen';
    }

    .title-task-total {
        font-size: 50px;
        font-weight: 700;
        font-family: 'Qwitcher Grypen';
        color: red;
        border-bottom: 1px solid black;
    }

    .title:hover {
        /* transition: 0.5s;
        transform: translateX(30px); */
        animation: shake-box 0.3s infinite;

    }

    @keyframes shake-box {
        0% {
            transform: translateX(0px);
            color: red;
        }

        50% {
            transform: translateX(20px);
            color: blue;
        }

        100% {
            transform: translateX(0px);
            color: yellow;
        }
    }
</style>