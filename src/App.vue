<template>
    <div id="app">
        <Select v-model="value" :options="options" />
    </div>
</template>
<script>
import Select from './components/Select.vue'
export default {
    name: 'app',
    components: {
        Select
    },
    data() {
        return {
            value: 'a',
            options: ['a', 'b']
        }
    }
}
</script>
<style>
</style>