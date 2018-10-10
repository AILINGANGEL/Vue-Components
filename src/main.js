import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss';
import Message from './components/Message';
import Button from './components/Button.vue';

Vue.config.productionTip = false;
Vue.prototype.$Message = Message;
Vue.component('Button', Button);

new Vue({
    render: h => h(App)
}).$mount('#app')