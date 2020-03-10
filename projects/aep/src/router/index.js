import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuebar from 'vuebar'
import VueTextareaAutosize from 'vue-textarea-autosize'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'
import Devices from '../views/Devices.vue'
import History from '../views/History.vue'
import FullHistory from '../views/FullHistory.vue'
import FullAlarm from '../views/FullAlarm.vue'
import axios from 'axios'

Vue.use({
    install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://212.42.199.112:5000/clients/1/apps/1/rpc'
    })
  }
})

Vue.use(VueRouter);
Vue.use(Vuebar);
Vue.use(VueTextareaAutosize);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/information',
    name: 'information',
    component: Information
  },
  {
    path: '/devices',
    name: 'devices',
    component: Devices
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/full-history',
    name: 'full-history',
    component: FullHistory
  },
  {
    path: '/full-alarm/:alarmId',
    name: 'full-alarm',
    component: FullAlarm,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
