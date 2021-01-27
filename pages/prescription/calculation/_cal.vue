<template>
  <div class="container m-5">
    <div>
        <h4 class="subtitle is-4">用量估算</h4>
        <h5 class="subtitle is-5">輸入噴灑面積</h5>
        <div class="field columns">
            <div class="control is-one-fifth">
               <input class="input is-primary" type="text" placeholder="Primary input" v-model="useArea">
            </div>      
        </div>
        <div class="buttons">
                <button class="button is-primary" @click="calculte()">計算</button>
        </div>
        <span>結果:{{ result }}公升</span>
        <h5 class="subtitle is-5">注意事項</h5>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            useArea:0,
            oil:50,
            suli:70,
            result:0,
        }
    },
    methods: {
        calculte(){
            if(this.$route.params.cal == "白葉枯病" || this.$route.params.cal =="紋枯病"){
                this.result =  this.useArea * this.oil
            }
            if(this.$route.params.cal == "褐飛蝨"){
                this.result =  this.useArea * this.suil
            }
        }
    },
}
</script>

