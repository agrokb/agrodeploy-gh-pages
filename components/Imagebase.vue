<template>
    <div>
        <h3 title="subtitle">請選擇</h3>
        <label class="checkbox">
        <input type="checkbox" name="shbl" value="白葉枯病" @change="send($event)">
        <figure class="image is-256x256">
            <img src="https://www.tndais.gov.tw/upload/tndais/images/news/13825/10448b.jpg">
        </figure>
        </label>
        <br>
        <label class="checkbox">
        <input type="checkbox" name="bls" value="紋枯病" @change="send($event)">
        <figure class="image is-256x256">
            <img src="https://www.jeinou.com/assets_c/2016/03/201603ine_mongare_2-thumb-179x238-19371.jpg">
        </figure>
        </label>
        <br>
        <label class="checkbox mt-5">
            <br> 
        <input type="checkbox" name="bug" value="褐飛蝨" @change="send($event)">
        <figure class="image is-256x256">
            <img src="https://www.tndais.gov.tw/upload/tndais/images/news/13754/10348b_.jpg">
        </figure>
        </label>
    </div>
</template>
<script>
export default {
  data() {
      return {
        checkData:{
                        "白葉枯病":false,
                        "紋枯病":false,
                        "褐飛蝨":false,
                        "褐飛蝨-1":false
                }
      }
  },
  methods: {
      send($event){
          let items = this.checkname;
          $event.preventDefault();
          //split
          this.checkData[$event.target.value] = $event.target.checked
          this.$emit("my-select", this.checkData);
      }
  },
}
</script>