<template>
    <div id="app">
        <Button @click="click" type="primary">click</Button>
        <Button @click="destroy" type="primary">destroy</Button>
    </div>
</template>
<script>
import Select from './components/Select';
import Divider from './components/Divider';
import Row from './components/Grid/Row';
import Col from './components/Grid/Col';
import Card from './components/Card';
import ButtonGroup from './components/ButtonGroup';
import Collapse from './components/Collapse/Collapse';
import Panel from './components/Collapse/Panel';
import Input from './components/Input';
import Icon from './components/Icon';
export default {
    name: 'app',
    components: {
        Divider,
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
            this.$Message.config({
                top: 10
            })
            let test = this.$Message.loading({
                content: 'ailing',
                top: 200,
                duration: 0,
                closable: true
            });
            // setTimeout(test, 2000);
        },
        destroy() {
            this.$Message.destroy('v-message');
        }
    }
}
</script>