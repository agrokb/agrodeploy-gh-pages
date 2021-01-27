<template>
  <div class="container m-5">
    <h4 class="title is-4">台梗九號病蟲害警報</h4>
    <div class="alarm">
      請選擇縣市
    </div>
    <SelectList @my-select="onChange($event)" />
    <LazyTable v-if="location != ''" v-bind:info="[blsShow,bugShow]" />
    <div class="buttons mt-5">
      <NuxtLink to="/infectpart">
        <button class="button is-link">線上診斷</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import axios from "../.nuxt/axios";
  export default {
    data() {
      return {
        SourcericeAlarmDatas: "",
        postion: "",
        bls: "",
        bug: "",
        blsShow: "",
        bugShow: "",
        location: "",
      };
    },
    created() {
      this.scrAlarmData();
    },
    methods: {
      scrAlarmData: async function () {
        let blsData = null;
        await this.$axios.$get(process.env.baseUrl).then(res => {
          let blsResult = [];
          let bugResult = [];
          for (let i = 2; i < 4; i++) {
            // data get
            let rawData = res[i];
            //delete unnecessery data
            delete rawData.id;
            delete rawData.BUG;
            delete rawData.LIGHTS01;
            delete rawData.LIGHTS02;
            delete rawData.LIGHTS03;
            delete rawData.LIGHTS04;
            delete rawData.LIGHTS05;
            delete rawData.LIGHTS06;

            for (const data in rawData) {
              //city name
              let cityData = rawData[data].split(/[\":]+/);

              if ((cityData[1] = "ADADAD")) {
                cityData[1] = "";
              }
              const resultData = [cityData[0].trim(), cityData[1].trim()];
              if (i == 2) {
                blsResult.push(resultData);
              }
              if (i == 3) {
                bugResult.push(resultData);
              }
            }
            //bls data get
            this.bls = blsResult;
            this.bug = bugResult;
          }
        });
      },
      getSeletedData(allData, locationLoaction, showData) {
        let showPart = "";
        for (const data in allData) {
          if (locationLoaction == allData[data][0]) {
            showPart = allData[data][1];
            if (showPart == "") {
              showPart = "無災情";
            }
          }
        }
        return showPart;
      },
      onChange($event) {
        this.location = $event;
        let location = this.location;
        let blsRaw = this.bls;
        let bugRaw = this.bug;
        let blsShow = this.blsShow;
        let bugShow = this.bugShow;
        this.blsShow = this.getSeletedData(blsRaw, location, blsShow);
        this.bugShow = this.getSeletedData(bugRaw, location, bugShow);
      },
    },
  };
</script>

<style>
</style>