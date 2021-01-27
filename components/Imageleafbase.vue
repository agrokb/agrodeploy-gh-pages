<template>
    <div>
        <h3 title="subtitle">請選擇</h3>
        <label class="checkbox">
        <input type="checkbox" name="shbl" value="白葉枯病" @change="send($event)">
        <figure class="image is-128x128">
            <img src="https://m.tndais.gov.tw/warm/pic2ImgB26.jpg">
        </figure>
        </label>
        <br>
        <label class="checkbox">
        <input type="checkbox" name="bls" value="紋枯病" @change="send($event)">
        <figure class="image is-128x128">
            <img src="https://www.boujo.net/admin/wp-content/uploads/ine_031.jpg">
        </figure>
        </label>
        <br>
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