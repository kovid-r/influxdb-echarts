<template>
  <div id="app">
    <h1>InfluxDB + Apache Echarts</h1>
    <SensorChart :sampleData="sampleDataForChart" :sampleLabels="sampleLabelsForChart">
    </SensorChart>
  </div>
</template>

<script>
import SensorChart from './components/SensorChart.vue';

export default {
  name: 'app',
  data() {
    return {
      sampleLabelsForChart: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      sampleDataForChart: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  },
  components: {
    SensorChart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
