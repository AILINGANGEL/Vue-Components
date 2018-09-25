<template>
    <div id="app">
        <Input v-model="value" autocomplete="on" type="textarea" ref="ailing" size="large" :rows="8" @on-enter="test" />
        <Button @click="click" type="primary">click</Button>
    </div>
</template>
<script>
import Select from './components/Select.vue';
import Divider from './components/Divider.vue';
import Button from './components/Button.vue';
import Row from './components/Grid/Row.vue';
import Col from './components/Grid/Col.vue';
import Card from './components/Card.vue';
import ButtonGroup from './components/ButtonGroup';
import Collapse from './components/Collapse/Collapse';
import Panel from './components/Collapse/Panel';
import Input from './components/Input';
export default {
    name: 'app',
    components: {
        Divider,
        Button,
        Select,
        Row,
        Col,
        Card,
        ButtonGroup,
        Panel,
        Collapse,
        Input
    },
    data() {
        return {
            value: '',
        }
    },
    mounted() {
        this.$refs.ailing.focus();
    },
    methods: {
        click() {
            alert(this.value);
        },
        testChange(value) {
            alert(value);
        },
        test(event) {
            console.log(event);
        }
    }
}
</script>
<style lang="scss">
#app {
    font-size: $font-size; // background-color: grey;
}
</style>