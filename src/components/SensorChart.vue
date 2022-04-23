<template>
  <div>
    <div class="chart-wrapper">
      <chart :options="chartOptionsLine">
        {{sampleData}}
      </chart>
    </div>
  </div>
</template>

<script>

export default {
  name: "SensorChart",
  props: ["sampleData","sampleLabels"],
  data: () => ({
    chartOptionsLine: {
      xAxis: {
        data: ["S","M","T",'W',"T","F","S"]
      },
      yAxis: {
        type: "value"
      },

      series: [
        {
          type: "line",
          // data: this.sampleData
          data: [1, 4, 6, 7, 26, 36, 19]
        }
      ],
      title: {
        text: "Sensor Data",
        x: "center",
        textStyle: {
          fontSize: 24
        }
      },
      color: ["#127ac2"]
    }
  })
};

</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 700px;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
