import Vue from "vue";
import App from "./App.vue";
import "@/plugins/echarts";
import {InfluxDB} from '@influxdata/influxdb-client'

Vue.config.productionTip = false;

const token = ''
const org = ''
const bucket = ''
const influxDbClient = new InfluxDB({url: 'https://us-west-2-1.aws.cloud2.influxdata.com', token: token})
const queryApi = influxDbClient.getQueryApi(org)

const query = `\
from(bucket:"${bucket}")\
|> range(start: v.timeRangeStart, stop: v.timeRangeStop)
|> filter(fn: (r) => r["_measurement"] == "airSensors")
|> filter(fn: (r) => r["_field"] == "temperature")
|> filter(fn: (r) => r["sensor_id"] == "TLM0100"`;

query
queryApi

new Vue({
  render: h => h(App)
}).$mount("#app");
