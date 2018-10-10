<template>
    <div id="app">
        <Button @click="click" type="primary">click</Button>
        <Button @click="destroy" type="primary">destroy</Button>
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
        // Button,
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
            this.$Message.warn({
                content: 'ailing',
                top: 200,
                onClose() {
                    alert('close');
                },
                render: h => {
                    return h('Button', {
                        props: {
                            type: 'primary'
                        }
                    }, 'test');
                }
            });
        },
        destroy() {
            this.$Message.destroy('v-message');
        }
    }
}
</script>