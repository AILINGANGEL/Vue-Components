<template>
    <div id="app">
        <Divider>
            test
        </Divider>
    </div>
</template>
<script>
import Divider from './components/Divider.vue';
import Button from './components/Button.vue';
export default {
    name: 'app',
    components: {
        Divider,
        Button
    },
    data() {
        return {
            value: 'a',
            options: ['a', 'b']
        }
    },
    methods: {
        click(msg) {
            alert(msg);
        }
    }
}
</script>
<style lang="scss">
#app {
    font-size: $font-size;
}
</style>