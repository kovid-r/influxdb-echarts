import Vue from "vue";
import App from "./App.vue";
import "@/plugins/echarts";
import {InfluxDB} from '@influxdata/influxdb-client';

Vue.config.productionTip = false;
// Vue.prototype.log = window.console.log;

const token = 'v96hkhxEFt0zeXtfPk4heXIUOItCU6em867gAE00R1Gvq8LGE1KsBZNkHjMrejRL6vMDi4sNvhA3QbHwRNv8ow=='
const org = 'kovid.rathee@gmail.com'
const url = 'https://us-east-1-1.aws.cloud2.influxdata.com'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)
// window.console.log(queryApi);

const fluxQuery = `from(bucket: "kovid.rathee's Bucket")|> range(start: 0)`

let sensorValues = [];

queryApi.queryRows(fluxQuery, {
  next: (row, tableMeta) => {
      // the following line creates an object for each row
      const o = tableMeta.toObject(row)
      // console.log(JSON.stringify(o, null, 2))
      // window.console.log(
      //   o
      // )
      sensorValues.push(o)
    },
    error: (error) => {
      window.console.error(error)
      window.console.log('\nFinished ERROR')
    },
    complete: () => {
      window.console.log('\nFinished SUCCESS')
    },
  })

// window.console.log(sensorValues);

const fluxData = sensorValues.map(x => x._value);
window.console.log(fluxData);
export {fluxData};

new Vue({
  render: h => h(App)
}).$mount("#app");
