<template>
  <div class="container m-5">
    <div>
        <div class="title">部位選擇</div>
        <div class="select is-multiple">
            <div class="control">
                <label class="radio choice">
                    <input type="radio" name="part" value="leaf" v-model="picked">
                    葉
                </label>
            </br>
                <label class="radio choice">
                    <input type="radio" name="part" value="leafbase" v-model="picked">
                    葉鞘
                </label>
            </br>
                <label class="radio choice">
                    <input type="radio" name="part" value="base" v-model="picked">
                    基部
                </label>
            </div>
            <br>
            <div class="buttons">
                <NuxtLink :to="{name: 'infectimage-category', params: { category:picked }}">
                     <button class="button is-link choice">確認</button>
                </NuxtLink>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        layout: "infectpart",
        data() {
            return {
                picked:""
            }
        },
    };
</script>
<style scoped>
.title{
     font-size:40px;
 }
.choice{
     font-size:30px;
}
</style>
