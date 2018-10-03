import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss';
import Message from './components/Message';

Vue.config.productionTip = false;
Vue.prototype.$Message = Message;

new Vue({
    render: h => h(App)
}).$mount('#app')