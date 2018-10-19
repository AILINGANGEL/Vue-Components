<template>
    <div id="app">
        <Button @click="show=true">显示</Button>
        <Modal v-model="show" title="测试" @on-visible-change="visibleChange" ok-text="测试" width="1000" :footer-hide="true" :styles="{top: '200px'}" scrollable>
            <p>第一行</p>
            <p>第一行</p>
            <p>第一行</p>
        </Modal>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            value: '',
            show: false,
            data: {
                a: 1,
                b: 2
            }
        }
    },
    methods: {
        visibleChange(val) {
            console.log(val);
        }
    }
}
</script>