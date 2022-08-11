import Vue from 'vue'
import App from './App.vue'
import WeatherWidget from './components/WeatherWidget.vue'

Vue.config.productionTip = false
Vue.component('weather-widget', WeatherWidget)

new Vue({
	render: h => h(App)
}).$mount('#app')
