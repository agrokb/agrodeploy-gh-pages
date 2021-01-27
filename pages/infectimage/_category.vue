<template>
  <div class="container m-5">
    <div>
        <LazyImageleaf      v-if="this.$route.params.category =='leaf'" @my-select="onChange($event)" />
        <LazyImageleafbase  v-if="this.$route.params.category =='leafbase'" @my-select="onChange($event)" />
        <LazyImagebase      v-if="this.$route.params.category =='base'" @my-select="onChange($event)"/>
       
        <NuxtLink :to="{name: 'protect-pest', query: { sendurl }}" class="button is-link is-black">確定送出</NuxtLink>
    </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            category:this.$route.params.category,
            checkdata:{},
            rawurl:[],
            sendurl:[]
        }
    },
    methods: {
        onChange($event){
            this.checkdata = $event;
            let items = this.checkdata;
            this.rawurl = [];
            this.sendurl = [];
            for (let item in items) {
 
                if(items[item] == true){
                     item = item.split('-');
                     item = item[0];
                     item.trim();
                     console.log(item);
                     this.rawurl.push(item.trim())
                }
            }
           let rawurl    =  this.rawurl;
           let partUrl   = rawurl.reduce((unique,item)=>unique.includes(item) ? unique : [...unique,item],[]);
           let itemArray = [];
           
           partUrl.forEach((value, index) => {
                 itemArray.push(value);
               })
           this.sendurl = itemArray;
        },
    },
}
</script>
<style scoped>
.font{
    font-size: 40px;
}
</style>
