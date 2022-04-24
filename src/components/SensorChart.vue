<template>
  <div>
    <div class="chart-wrapper">
      <chart :options="chartOptionsLine">
      </chart>
    </div>
    {{fluxData}}
  </div>
</template>

<script>

export default {
  name: "SensorChart",
  props: ["sampleData","sampleLabels","fluxData"],

  data: function() { 
    return {
      chartOptionsLine: { 
        xAxis: {
          data: this.sampleLabels
        },
        yAxis: {
          type: "value"
        },

        series: [
          {
            type: "line",
            data: this.sampleData
          }
        ],
        title: {
          text: this.fluxData,
          x: "center",
          textStyle: {
            fontSize: 24
          }
        },
        color: ["#127ac2"]
      }
    }
  }
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
