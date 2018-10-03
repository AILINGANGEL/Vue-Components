<template>
    <div id="app">
        <!-- <Input v-model="value" autocomplete="on" ref="ailing" :rows="8" @on-enter="test" type="textarea" autosize> -->
        <!-- <span slot="prepend">test</span>
<span slot="append">test</span>
</Input> -->
        <Button @click="click" type="primary">click</Button>
        <Button @click="destroy" type="primary">destroy</Button>
        <!-- <Icon type="alert" size="32" color="red"></Icon> -->
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
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
import Icon from './components/Icon';
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
        Input,
        Icon
    },
    data() {
        return {
            value: '',
            show: false
        }
    },
    methods: {
        click() {
            this.$Message.success();
        },
        destroy() {
            this.$Message.destroy('v-message');
        }
    }
}
</script>
<style lang="scss">
#app {
    font-size: $font-size; // background-color: grey;
}
</style>