import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss';
import Message from './components/Message';
import Button from './components/Button';
import Upload from './components/Upload';
import Icon from './components/Icon';

Vue.config.productionTip = false;
Vue.prototype.$Message = Message;
Vue.component('Button', Button);
Vue.component('Upload', Upload);
Vue.component('Icon', Icon);

new Vue({
    render: h => h(App)
}).$mount('#app')