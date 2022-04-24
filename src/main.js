import Vue from "vue";
import App from "./App.vue";
import "@/plugins/echarts";
// import {InfluxDB} from '@influxdata/influxdb-client';

Vue.config.productionTip = false;

// const token = 'zz-k82I4_8EK3UKrqchML2RYHHjqcjm_04n-zrsgVu_WcDCZahTG9vN1E6sxawwOt18HUtiNceGElMmbvtfe7w=='
// const org = 'kovid.rathee@gmail.com'
// const bucket = ''
// const influxDbClient = new InfluxDB({url: 'https://us-west-2-1.aws.cloud2.influxdata.com', token: token})
// const queryApi = influxDbClient.getQueryApi(org)

// const fluxQuery = `\
//   sample.data(set: "airSensor")
//   |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
//   |> filter(fn: (r) => r["_measurement"] == "airSensors")
//   |> filter(fn: (r) => r["_field"] == "temperature")
//   |> filter(fn: (r) => r["sensor_id"] == "TLM0100")`;

// const fluxObserver = {
//   next(row, tableMeta) {
//     const o = tableMeta.toObject(row)
//     o
//   }
// }

// var fluxData = queryApi.queryRows(fluxQuery, fluxObserver)
const fluxData = "This"
export {fluxData}

new Vue({
  render: h => h(App)
}).$mount("#app");
