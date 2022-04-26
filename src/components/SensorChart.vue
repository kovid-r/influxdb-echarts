<template>
  <div>
    <div v-if="mainData.length" class="chart-wrapper">
      <chart :options="chartOptionsLine"> </chart>
      <chart :options="chartOptionsBar"> </chart>
    </div>
    <div v-else>Loading...</div>
  </div>

</template>
<script>
  
export default {
  name: "SensorChart",
  props: ["mainData", "isCompleted"],

  data: function() {
    let labels = [];
    let values = [];
    window.console.log(this.mainData,"KR");
    this.mainData.map(val => {
      if (val._value) {
        values.push(val._value);
      } else if (val._time) {
        labels.push(val._time);
      }
    });

    return {
      chartOptionsLine: {
        xAxis: {
          data: labels
        },
        yAxis: {
          type: "value"
        },

        series: [
          {
            type: "line",
            data: values
          }
        ]
      },
      chartOptionsBar: {
        xAxis: {
          data: labels
        },
        yAxis: {
          type: "value"
        },

        series: [
          {
            type: "bar",
            data: values
          }
        ]
      },
      
    };
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
