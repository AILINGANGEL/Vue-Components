import Messages from './Messages';
import Vue from 'vue';

export default {
    message(type) {
        const Instance = new Vue({
            render(h) {
                return h(Messages, {
                    props: {
                        text: 'ailing',
                        type: type
                    }
                })
            }
        });
        let component = Instance.$mount();
        document.body.append(component.$el)
    },
    info() {
        this.message('info');
    },
    warn() {
        this.message('warn');
    },
    success() {
        this.message('success');
    },
    destroy(className) {
        setTimeout(function() {
            let node = document.getElementsByClassName(className)[0];
            if (node) {
                document.body.removeChild(node);
            }
        }, 500);
    }
}