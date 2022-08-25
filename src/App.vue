<template>
  <BlogHeader style="text-align:center"/>
  <BlogInput />
  <BlogList />
  <BlogFooter/>
</template>

<script>
  import BlogHeader from "@/components/BlogHeader.vue";
  import BlogInput from "@/components/BlogInput.vue";
  import BlogList from "@/components/BlogList.vue";
  import BlogFooter from "@/components/BlogFooter.vue";
export default {
    components:{
      BlogHeader,
      BlogInput,
      BlogList,
      BlogFooter
    },
    setup(){

    return{
    }
  }
}
</script>

<style>

</style>