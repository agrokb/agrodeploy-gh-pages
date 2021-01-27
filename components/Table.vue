<template>  
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>白葉枯病 </th>
            <th>褐飛蝨 </th>
          </tr>
          <tr>
            <td>{{ info[0]  }}</td>
            <td>{{ info[1]  }}</td>
          </tr>
        </thead>
      </table>
    </div>
</template>
<script>
export default {
    props: {info:String},
    data() {
        return {
           
    }
}
}
</script>