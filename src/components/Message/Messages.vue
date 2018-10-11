<template>
    <div class="v-messages" :style="styles">
        <Message v-for="message in messages" :key="message.name" v-bind="message"></Message>
    </div>
</template>
<script>
import Message from './MessageItem';
let seed = 0;
let now = Date.now();

function getUuid() {
    return 'vMessage' + now + '_' + (seed++);
}
export default {
    components: {
        Message
    },
    props: {
        styles: {
            type: Object,
            default: () => {
                return {
                    top: '15px'
                }
            }
        }
    },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        add(message) {
            message.name = message.name || getUuid();
            let newMessage = Object.assign({}, message);
            this.messages.push(newMessage);
        },
        clearAll() {
            this.messages = [];
        },
        remove(name) {
            let index = -1;
            this.messages.filter((item, i) => {
                if (item.name === name) {
                    index = i;
                    return true
                }
                return false;
            })
            this.messages.splice(index, 1);
        }
    }
}
</script>