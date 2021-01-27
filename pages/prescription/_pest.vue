<template>
  <div class="container m-5">
    <div>
        <LazyBls  v-if="this.$route.params.pest =='紋枯病'" />
        <LazyShbl v-if="this.$route.params.pest =='白葉枯病'" />
        <LazyBug  v-if="this.$route.params.pest =='褐飛蝨'" />
         <a href="/" class="dropdown-item">
                    首頁
         </a>

    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
