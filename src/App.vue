<template>
    <div id="app">
        <Row type="flex" justify="space-between" align="middle" class="code-row-bg" :gutter="16">
            <Col span="6">
            <p style="height: 80px; background-color: blue">col-4</p>
            </Col>
            <Col span="6">
            <p style="height: 30px; background-color: blue">col-4</p>
            </Col>
            <Col span="6">
            <p style="height: 100px; background-color: blue">col-4</p>
            </Col>
            <Col span="6">
            <p style="height: 60px; background-color: blue">col-4</p>
            </Col>
        </Row>
    </div>
</template>
<script>
import Select from './components/Select.vue';
import Divider from './components/Divider.vue';
import Button from './components/Button.vue';
import Row from './components/Grid/Row.vue';
import Col from './components/Grid/Col.vue';
export default {
    name: 'app',
    components: {
        Divider,
        Button,
        Select,
        Row,
        Col
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