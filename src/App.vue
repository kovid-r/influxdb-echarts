<template>
  <div id="app">
    <h1>InfluxDB + Apache Echarts</h1>
    <SensorChart :mainData="mainData" :isCompleted="isCompleted">
    </SensorChart>
  </div>
</template>

<script>

import SensorChart from "./components/SensorChart.vue";
import { queryApi, fluxQuery } from "./main.js";

export default {
  name: "app",
  props: [],
  data() {
    return {
      mainData: [],
      isCompleted: false
    };
  },
  methods: {
     async fetchData() {
       await queryApi.queryRows(fluxQuery, {
        next: (row, tableMeta) => {
          const o = tableMeta.toObject(row);
          this.mainData.push(o);
        },
        error: error => {
          window.console.error(error);
          window.console.log("\nFinished ERROR");
        },
        complete: () => {
          this.isCompleted = true;
          window.console.log("\nFinished SUCCESS");
        }
      });
    }
  },
  mounted() {
   return this.fetchData();
  },
  components: {
    SensorChart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d263e;
  margin-top: 60px;
}

</style>
