import Vue from "vue";
import App from "./App.vue";
import "@/plugins/echarts";
import { InfluxDB } from "@influxdata/influxdb-client";

Vue.config.productionTip = false;

const token = "";
const org = "";
const url = "";

const queryApi = new InfluxDB({ url, token }).getQueryApi(org);
const fluxQuery = `from(bucket: "kovid.rathee's Bucket")|> range(start: 0)`;

export { fluxQuery, queryApi };

new Vue({
  render: h => h(App)
}).$mount("#app");
