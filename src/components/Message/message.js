import Messages from './Messages';
import Vue from 'vue';

Messages.newInstance = props => {
    const Instance = new Vue({
        render(h) {
            return h(Messages);
        }
    });
    let component = Instance.$mount();
    document.body.append(component.$el);
    const MESSAGE_ITEM = Instance.$children[0]; // 获取Messages实例

    return {
        show(type, content) {
        	let messageContent;
        	if (typeof content === 'object') {
        		messageContent = content;
        	} else {
        		messageContent = {};
        		messageContent.content = content;
        	}
        	messageContent.type = type;
            MESSAGE_ITEM.add(messageContent);
        },
        destroy() {
        	MESSAGE_ITEM.clearAll();
            let node = document.getElementsByClassName('v-messages')[0];
            if (node) {
                document.body.removeChild(node);
            }
        }
    }
}

console.log(Messages);

export default Messages;