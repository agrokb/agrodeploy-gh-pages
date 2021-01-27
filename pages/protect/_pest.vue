<template>
  <div class="container m-5">
    <div>
        <h3 class="subtitle">可能的病蟲害</h3>
        <ul>
            <li v-for="(item,index) in rawUrl">
                <NuxtLink :to="{name: 'prescription-pest', params: { pest:item.pest }}"><span class="ddd">{{ item.pest }}</span></NuxtLink>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            rawUrl:{}
        }
    },
    created(){
        this.createArray()
    },
    methods:{
        createArray(){
            let dataArray = this.$route.query.sendurl;
            dataArray.forEach((value, index) => {
                this.rawUrl[index] = {"pest":value}
            })
        }
    },
}
</script>
<style scoped>
span.ddd{
    font-size: 30px;
}
</style>

