import Messages from './message';

let messageInstance = null;
var getMessageInstance = function() {
    messageInstance =  messageInstance || Messages.newInstance();
    return messageInstance;
}

function showMessage (type, content) {
    let instance = getMessageInstance();
    instance.show(type, content);
}


export default {
    message(type, content) {
        showMessage(type, content);
    },
    info(content) {
        this.message('info', content);
    },
    warn(content) {
        this.message('warn', content);
    },
    success(content) {
        this.message('success', content);
    },
    destroy() {
        if(messageInstance) {
            // 移除dom 并将messageInstance置空
            messageInstance.destroy();
            messageInstance = null;
        }
    }
}