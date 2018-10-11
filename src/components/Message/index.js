import Message from './message';

let messageInstance = null;
var getMessageInstance = function() {
    messageInstance =  messageInstance || Message.newInstance();
    return messageInstance;
}

let name = 1;
function showMessage (type, content) {
    let instance = getMessageInstance();
    name++;
    instance.show(type, content, 'v-message' + name);
    return function() {
        instance.remove('v-message' + name);
    }
}


export default {
    message(type, content) {
        return showMessage(type, content);
    },
    info(content) {
        return this.message('info', content);
    },
    warn(content) {
        return this.message('warn', content);
    },
    success(content) {
        return this.message('success', content);
    },
    loading(content) {
        return this.message('loading', content);
    },
    destroy() {
        if(messageInstance) {
            // 移除dom 并将messageInstance置空
            messageInstance.destroy();
            messageInstance = null;
        }
    }
}