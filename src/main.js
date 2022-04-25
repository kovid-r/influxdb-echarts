import Vue from "vue";
import App from "./App.vue";
import "@/plugins/echarts";
import { InfluxDB } from "@influxdata/influxdb-client";

Vue.config.productionTip = false;

const token = "v96hkhxEFt0zeXtfPk4heXIUOItCU6em867gAE00R1Gvq8LGE1KsBZNkHjMrejRL6vMDi4sNvhA3QbHwRNv8ow==";
const org = "kovid.rathee@gmail.com";
const url = "https://us-east-1-1.aws.cloud2.influxdata.com";

const queryApi = new InfluxDB({ url, token }).getQueryApi(org);
const fluxQuery = `from(bucket: "kovid.rathee's Bucket")|> range(start: 0)`;

export { fluxQuery, queryApi };

new Vue({
  render: h => h(App)
}).$mount("#app");
