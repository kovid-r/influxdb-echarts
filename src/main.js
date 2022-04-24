import Vue from "vue";
import App from "./App.vue";
import "@/plugins/echarts";
import {InfluxDB} from '@influxdata/influxdb-client';

Vue.config.productionTip = false;
// Vue.prototype.log = window.console.log;

const token = 'v96hkhxEFt0zeXtfPk4heXIUOItCU6em867gAE00R1Gvq8LGE1KsBZNkHjMrejRL6vMDi4sNvhA3QbHwRNv8ow=='
const org = 'kovid.rathee@gmail.com'
const url = 'https://us-east-1-1.aws.cloud2.influxdata.com'

// const fluxQuery = `\
//   sample.data(set: "airSensor")
//   |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
//   |> filter(fn: (r) => r["_measurement"] == "airSensors")
//   |> filter(fn: (r) => r["_field"] == "temperature")
//   |> filter(fn: (r) => r["sensor_id"] == "TLM0100")`;

const queryApi = new InfluxDB({url, token}).getQueryApi(org)

const fluxQuery = `\
//   sample.data(set: "airSensor")
//   |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
//   |> filter(fn: (r) => r["_measurement"] == "airSensors")
//   |> filter(fn: (r) => r["_field"] == "temperature")
//   |> filter(fn: (r) => r["sensor_id"] == "TLM0100")`;

let sensorValues = [];

/** Execute a query and receive line table metadata and rows. */
// queryApi.queryRows(fluxQuery, fluxObserver)

queryApi
  .collectRows(fluxQuery /*, you can specify a row mapper as a second arg */)
  .then(data => {
    data.forEach(x => sensorValues.push(x))
    window.console.log('\nCollect ROWS SUCCESS')
  })
  .catch(error => {
    error
    window.console.error(error)
    window.console.log('\nCollect ROWS ERROR')
  })

const fluxData = sensorValues;
export {fluxData};

new Vue({
  render: h => h(App)
}).$mount("#app");
