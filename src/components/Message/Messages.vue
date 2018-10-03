<template>
    <Message v-for="message in messages"></Message>
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
            let name = message.name || getUuid();
            let message = Object.assign({}, message);
            this.messages.push(message);
        }
    }
}
</script>