<template>
    <div class="v-messages">
        <Message v-for="message in messages" :key="message.name" v-bind="message"></Message>
    </div>
</template>
<script>
import Message from './Message';
let seed = 0;
let now = Date.now();

function getUuid() {
    return 'vMessage' + now + '_' + (seed++);
}
export default {
    components: {
        Message
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
        }
    }
}
</script>